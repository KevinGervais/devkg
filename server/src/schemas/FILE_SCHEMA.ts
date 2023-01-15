import { JSONSchemaType } from "ajv"
import { Base64File, PublicFile } from "shared"

import { ID_SCHEMA } from "."

export const FILE_SCHEMA = {
  type: "object",

  required: [
    "_id",
    "name",
    "type",
    "size",
    "data",
  ] as JSONSchemaType<Base64File>["required"],
  properties: {
    _id: ID_SCHEMA,
    name: { type: "string", maxLength: 200 },
    type: { type: "string", maxLength: 200 },
    size: { type: "number" },
    data: { type: "string" },
    thumbnailData: { type: "string", nullable: true }
  }
} as const

export const FILE_OPTIONAL_ID_SCHEMA = {
  ...FILE_SCHEMA,
  properties: {
    ...FILE_SCHEMA.properties,
    _id: { ...ID_SCHEMA, nullable: true },
  },
  required: [
    "name",
    "type",
    "size",
    "data",
  ] as JSONSchemaType<PublicFile>["required"],
} as const

const { _id, ...propsWithoutId } = FILE_SCHEMA.properties
export const FILE_WITHOUT_ID_SCHEMA = {
  ...FILE_SCHEMA,
  properties: propsWithoutId,
  required: [
    "name",
    "type",
    "size",
    "data",
  ] as JSONSchemaType<PublicFile>["required"],
} as const
export const FILE_SCHEMA_TYPED: JSONSchemaType<Base64File> = {
  ...FILE_SCHEMA,
}