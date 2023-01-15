

import { PHONE_REGEX } from "@/regex"

import { getExactRegex } from "."
import { throwError } from "./throwError"

export function validatePhone(phone: string): void | never {
  if (!getExactRegex(PHONE_REGEX).test(String(phone).toLowerCase())) {
    throwError("invalidPhone")
  }
}