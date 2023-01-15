import { ID_LENGTH, SHORT_ID_LENGTH, TOKEN_LENGTH } from "../constants"

export function generateId(length: typeof ID_LENGTH | typeof SHORT_ID_LENGTH | typeof TOKEN_LENGTH | 256 = 24, isNumber?: boolean): string {
  const getOctal = () => Math.random().toString(isNumber ? undefined : 36).slice(2, 10)
  if (length === TOKEN_LENGTH) {
    return getOctal().slice(0, 5)
  }
  return Array(length / 8).fill("").map(() => getOctal()).join("")
}