import {
  AddressRequests,
  AllRequestPaths,
  Base64File,
  Bug,
  BugRequests,
  Email,
  EmailRequests,
  FileRequests,
  PostalAddress,
  Session,
  SessionRequests,
  SocketRequests,
  User,
  UserRequests
} from ".."

export * from "./sessions"
export * from "./users"
export * from "./files"
export * from "./emails"
export * from "./addresses"
export * from "./sockets"
export * from "./bugs"

export interface AllRequests {
  users: UserRequests
  sessions: SessionRequests
  files: FileRequests
  emails: EmailRequests
  addresses: AddressRequests
  sockets: SocketRequests
  bugs: BugRequests
}
export interface TypeByCollectionName {
  users: User
  sessions: Session
  files: Base64File
  emails: Email
  addresses: PostalAddress
  sockets: {}
  taxes: {}
  bugs: Bug
  paypal: {}
}
export type AllCollections = keyof AllRequests

export type RequestData<Params, Result, Emit = undefined> = { params: Params, result: Result, emit: Emit }

type AcceptedContent = { [key in AllRequestPaths]?: RequestData<any, any, any> }
export type RequestContent<Content extends AcceptedContent | any> = {
  [key in keyof Content]: (
    key extends AllRequestPaths ?
    Content[key] extends RequestData<any, any, any> ?
    Content[key] :
    Content[key] extends string ?
    never :
    key extends string ?
    never :
    never :
    never
  )
}

export interface PublicRequestData {
  content?: string
  data?: any
}
export interface SocketQuery {
  sessionId?: string
  userId?: string
  publicKey: string
}