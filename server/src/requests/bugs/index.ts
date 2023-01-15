
import { SocketRequestHandler } from "@/classes"
import { SchemaDefinition, SchemaItem } from "@/model"
import { FILE_LIST_SCHEMA, ID_SCHEMA } from "@/schemas"

import { createOne } from "./createOne"
import { deleteOne } from "./deleteOne"
import { getMany } from "./getMany"

export function bugRequests(handleRequest: SocketRequestHandler["handleRequest"]): void {
  handleRequest("bugs", "createOne", createOne)
  handleRequest("bugs", "getMany", getMany)
  handleRequest("bugs", "deleteOne", deleteOne)
}

const bugDefinition: SchemaDefinition<"bugs"> = {
  _id: ID_SCHEMA,
  deviceId: ID_SCHEMA,
  imageFileList: FILE_LIST_SCHEMA,
  operatingSystem: { type: "string", maxLength: 100 },
  isCordova: { type: "boolean" },
  userAgent: { type: "string", maxLength: 10000 },
  appVersion: { type: "string", minLength: 4, maxLength: 50 },
  message: { type: "string", maxLength: 10000 },
}

export const bugSchema: SchemaItem<"bugs"> = {
  definition: bugDefinition,
  requiredParamsPerRequest: {
    createOne: {
      deviceId: true,
      operatingSystem: true,
      userAgent: true,
      isCordova: true,
      appVersion: true,
      message: true,
      imageFileList: true,
    },
    getMany: {},
    deleteOne: {
      _id: true
    }
  }
}
