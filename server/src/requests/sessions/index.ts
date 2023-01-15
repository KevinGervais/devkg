
import { SocketRequestHandler } from "@/classes"
import { SchemaDefinition, SchemaItem } from "@/model"
import { ID_SCHEMA } from "@/schemas"

import { createOne } from "./createOne"
import { deleteOne } from "./deleteOne"


export function sessionRequests(handleRequest: SocketRequestHandler["handleRequest"]): void {
  handleRequest("sessions", "createOne", createOne)
  handleRequest("sessions", "deleteOne", deleteOne)
}


const sessionDefinition: SchemaDefinition<"sessions"> = {
  userId: ID_SCHEMA,
  deviceId: { ...ID_SCHEMA },
  email: { type: "string", maxLength: 1000 },
  password: { type: "string", maxLength: 200 },
  notificationRegistrationId: { type: "string", maxLength: 2024 },
  sessionId: { type: "string", maxLength: 2024 },
  secureId: ID_SCHEMA,
}


export const sessionSchema: SchemaItem<"sessions"> = {
  definition: sessionDefinition,
  requiredParamsPerRequest: {
    createOne: {},
    deleteOne: {
      deviceId: true
    }
  }
}