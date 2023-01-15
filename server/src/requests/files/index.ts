import { FILE_DATA_TYPE_LIST, LONG_ID_LENGTH } from "shared"

import { HTTPRequestHandler } from "@/classes"
import { getPaternSchema } from "@/functions"
import { SchemaDefinition, SchemaItem } from "@/model"
import { ID_SCHEMA } from "@/schemas"

import { getMany } from "./getMany"
import { getOne } from "./getOne"

export function fileRequests(handleRequest: HTTPRequestHandler["handleRequest"]): void {
  getOne(handleRequest)
  getMany(handleRequest)
}

const fileDefinition: SchemaDefinition<"files"> = {
  _id: ID_SCHEMA,
  dataType: getPaternSchema(FILE_DATA_TYPE_LIST),
  idList: { type: "array", items: ID_SCHEMA },
  socketId: { type: "string", minLength: LONG_ID_LENGTH, maxLength: LONG_ID_LENGTH },
}

export const fileSchema: SchemaItem<"files"> = {
  definition: fileDefinition,
  requiredParamsPerRequest: {
    getMany: {
      socketId: true,
      dataType: true,
      idList: true,
    },
    getOne: {
      _id: true,
      dataType: true,
      socketId: true,
    }
  }
}