import { IS_DEV } from "./IS_DEV"

export const DATABASE = {
  url: IS_DEV
    ? ""
    : ``,
  name: IS_DEV ? "dev-kevin-gervais" : "prod-kevin-gervais"
} as const

