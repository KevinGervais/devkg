import { SocketRequestHandler } from "@/classes"
import { SchemaDefinition, SchemaItem } from "@/model"
import { ID_SCHEMA, LANGUAGE_SCHEMA } from "@/schemas"

import { geocode } from "./geocode"
import { getMany } from "./getMany"
import { getOne } from "./getOne"


export function addressRequests(handleRequest: SocketRequestHandler["handleRequest"]): void {
  handleRequest("addresses", "getOne", getOne)
  handleRequest("addresses", "getMany", getMany)
  handleRequest("addresses", "geocode", geocode)
}

const addressDefinition: SchemaDefinition<"addresses"> = {
  _id: ID_SCHEMA,
  language: LANGUAGE_SCHEMA,
  params: { type: "array", items: { type: "string", maxLength: 200 } },
  idList: { type: "array", items: ID_SCHEMA },
  searchField: { type: "string", maxLength: 1000 },
  lat: { type: "number", minimum: -10000, maximum: 10000 },
  lng: { type: "number", minimum: -10000, maximum: 10000 }
}

export const addressSchema: SchemaItem<"addresses"> = {
  definition: addressDefinition,
  requiredParamsPerRequest: {
    geocode: {
      language: true
    },
    getOne: {
      _id: true
    },
    getMany: {
      idList: true
    }
  }
}