import { JSONSchemaType } from "ajv"
import { HtmlString } from "shared"


export const HTML_SCHEMA = {
  type: "object",

  required: [
    "html",
    "plainText"
  ] as JSONSchemaType<HtmlString>["required"],
  properties: {
    html: {
      type: "string",
      maxLength: 1000000
    },
    plainText: {
      type: "string",
      maxLength: 1000000
    }
  }
} as const

export const ADDRESS_SCHEMA_TYPED: JSONSchemaType<HtmlString> = { ...HTML_SCHEMA }