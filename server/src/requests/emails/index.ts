
import { SocketRequestHandler } from "@/classes"
import { SchemaDefinition, SchemaItem } from "@/model"

import { createOne } from "./createOne"


export function emailRequests(handleRequest: SocketRequestHandler["handleRequest"]): void {
  handleRequest("emails", "createOne", createOne)
}

const emailDefinition: SchemaDefinition<"emails"> = {
  subject: { type: "string", maxLength: 500 },
  title: { type: "string", maxLength: 500 },
  content: { type: "string", maxLength: 200000 },
  emailList: { type: "array", minItems: 1, items: { type: "string", maxLength: 500 } },
}


export const emailSchema: SchemaItem<"emails"> = {
  definition: emailDefinition,
  requiredParamsPerRequest: {
    createOne: {
      subject: true,
      title: true,
      content: true,
      emailList: true,
    }
  }
}