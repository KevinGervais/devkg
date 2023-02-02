import { JSONSchemaType } from "ajv"
import { PostalAddress } from "shared"

import { ID_SCHEMA } from "."

export const ADDRESS_SCHEMA = {
  type: "object",

  required: [
    "_id",
    "address",
    "streetName",
    "city",
    "stateOrRegion",
    "stateCode",
    "postalCode",
    "country",
    "countryCode",
    "lat",
    "lng",
  ] as JSONSchemaType<PostalAddress>["required"],
  properties: {
    _id: ID_SCHEMA,
    address: { type: "string", maxLength: 1000 },
    streetNumber: { type: "string", maxLength: 200, nullable: true },
    streetExt: { type: "string", maxLength: 400, nullable: true },
    streetName: { type: "string", maxLength: 500 },
    city: { type: "string", maxLength: 200 },
    stateOrRegion: { type: "string", maxLength: 400 },
    stateCode: { type: "string", maxLength: 200 },
    postalCode: { type: "string", maxLength: 200 },
    country: { type: "string", maxLength: 200 },
    countryCode: { type: "string", maxLength: 200 },
    lat: { type: "number" },
    lng: { type: "number" },
  }
} as const

export const ADDRESS_SCHEMA_TYPED: JSONSchemaType<PostalAddress> = { ...ADDRESS_SCHEMA }