import Ajv, { ValidateFunction } from "ajv"
import ajvErrors from "ajv-errors"
import { AllCollections, AllRequests, TypeByCollectionName } from "shared"

import { SCHEMA_MAP } from "@/constants"
import { DATE_SCHEMA } from "@/schemas"

import { log } from "."
import { throwError } from "./throwError"

const ajv = new Ajv({ allErrors: true, removeAdditional: true })
ajvErrors(ajv, { singleError: true })
export function validate<
  Collection extends AllCollections,
  Path extends keyof AllRequests[Collection],
>(
  collection: Collection,
  path: Path,
  data: Partial<TypeByCollectionName[Collection]>,
): void | never {

  const requiredObj = (SCHEMA_MAP[collection].requiredParamsPerRequest as any)[path] as { [key: string]: true }
  const requiredList: string[] = Object.keys(requiredObj)

  const definition = SCHEMA_MAP[collection].definition

  if (!requiredObj || !definition) {
    throwError("invalidValidator")
  }

  const validateFn: ValidateFunction = ajv.compile<TypeByCollectionName[Collection] & { requestDate: string }>({
    type: "object",
    properties: {
      ...definition,
      requestDate: DATE_SCHEMA,
    },

    required: requiredList
  })

  if (!validateFn(data)) {
    if (collection === "files" && path === "createOne") {
      throwError("wrongFileSize")
    } else if (validateFn.errors && validateFn.errors.length) {
      log(validateFn.errors, "error")
    }
    throwError("invalidValidator")
  }
}
