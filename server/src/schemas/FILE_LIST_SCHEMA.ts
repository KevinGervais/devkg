
import { FILE_SCHEMA } from "./FILE_SCHEMA"

export const FILE_LIST_SCHEMA = {
  type: "array",
  items: { ...FILE_SCHEMA }
} as const