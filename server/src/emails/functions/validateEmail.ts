
import { getExactRegex, throwError } from "@/functions"
import { EMAIL_REGEX } from "@/regex"


export function validateEmail(email: string): void | never {
  if (!getExactRegex(EMAIL_REGEX).test(String(email).toLowerCase())) {
    throwError("invalidEmail")
  }
}