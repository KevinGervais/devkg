
import { OS_TYPE_LIST, SHORT_ID_LENGTH } from "shared"

import { SocketRequestHandler } from "@/classes"
import { getPaternSchema } from "@/functions"
import { SchemaDefinition, SchemaItem } from "@/model"
import { ID_SCHEMA, LANGUAGE_SCHEMA } from "@/schemas"

import { createOne } from "./createOne"
import { deleteOne } from "./deleteOne"
import { getMany } from "./getMany"
import { getOne } from "./getOne"
import { updateOne } from "./updateOne"

export function userRequests(handleRequest: SocketRequestHandler["handleRequest"]): void {
  handleRequest("users", "createOne", createOne)
  handleRequest("users", "deleteOne", deleteOne)
  handleRequest("users", "getMany", getMany)
  handleRequest("users", "getOne", getOne)
  handleRequest("users", "updateOne", updateOne)
}


const userDefinition: SchemaDefinition<"users"> = {
  _id: ID_SCHEMA,
  language: LANGUAGE_SCHEMA,
  secureId: ID_SCHEMA,
  secureIdVerif: ID_SCHEMA,
  deviceId: ID_SCHEMA,
  os: getPaternSchema(OS_TYPE_LIST),
  token: { type: "string", maxLength: SHORT_ID_LENGTH },
  isResendingToken: { type: "boolean" },
  isCancelToken: { type: "boolean" },
  forgotPasswordEmail: { type: "string", maxLength: 200 },
  firstName: { type: "string", maxLength: 200 },
  lastName: { type: "string", maxLength: 200 },
  email: { type: "string", maxLength: 200 },
  phone: { type: "string", maxLength: 200 },
  password: { type: "string", maxLength: 200 },
  oldPassword: { type: "string", maxLength: 200 },
  role: { type: "string", pattern: "[standard|admin]" }
}

export const userSchema: SchemaItem<"users"> = {
  definition: userDefinition,
  requiredParamsPerRequest: {
    createOne: {
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      language: true,
      os: true,
      deviceId: true,
    },
    updateOne: {
      language: true
    },
    deleteOne: {
    },
    getCurrent: {},
    getOne: {
      _id: true
    },
    getMany: {},
    forgotPassword: {}
  }
}