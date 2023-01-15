import { HTTPRequestHandler, SocketRequestHandler } from "@/classes"

import { addressRequests } from "./addresses"
import { bugRequests } from "./bugs"
import { emailRequests } from "./emails"
import { fileRequests } from "./files"
import { sessionRequests } from "./sessions"
import { userRequests } from "./users"

export function handleSocketRequests(handleRequest: SocketRequestHandler["handleRequest"]): void {
  addressRequests(handleRequest)
  emailRequests(handleRequest)
  sessionRequests(handleRequest)
  userRequests(handleRequest)
  bugRequests(handleRequest)
}

export function handleHttpRequests(handleRequest: HTTPRequestHandler["handleRequest"]): void {
  fileRequests(handleRequest)
}