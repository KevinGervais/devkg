import { ErrorMessages } from "shared"

export function throwError(message: ErrorMessages): never {
  throw new Error(message)
}

