import { Remove, RequestContent, RequestData } from ".."
export interface Email {
  _id: string
  subject: string
  title: string
  content: string
  emailList: string[]
}
export type AllEmailTemplates =
  "createUser"
  | "custom"
  | "resetUserPassword"
  | "updateUserEmail"
  | "updateUserPassword"
  | "verifyEmail"

export type EmailRequests = RequestContent<{
  createOne: RequestData<
    Remove<Email, "_id">,
    undefined
  >
}>