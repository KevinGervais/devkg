import { SayKeywordStrings } from "shared"

import { sendErrorEmailToDev } from "@/emails/functions"

import { getSay } from "./getSay"
import { log } from "./log"

export function preventUnhandledErrors(): void {
  process.on("uncaughtException", (err: any) => {
    const message = getSay("en")[err?.message as SayKeywordStrings] || err?.message
    log(message, "error")
    sendErrorEmailToDev("kevingervais uncatched exception", message).catch(() => null)
  })
  process.on("unhandledRejection", (err: any) => {
    const message = getSay("en")[err?.message as SayKeywordStrings] || err?.message
    log(message, "error")
    sendErrorEmailToDev("kevingervais unhandled exception", message).catch(() => null)
  })
}