import { ID_LENGTH } from "shared"

export const ID_SCHEMA = {
  type: "string",
  minLength: ID_LENGTH,
  maxLength: ID_LENGTH,
} as const