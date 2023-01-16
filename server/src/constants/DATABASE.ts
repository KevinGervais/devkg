import { IS_DEV } from "./IS_DEV"

export const DATABASE = {
  url: "mongodb+srv://admin:islam@cluster0.clqvnq1.mongodb.net",
  name: IS_DEV ? "dev-kevin-gervais" : "prod-kevin-gervais"
} as const

