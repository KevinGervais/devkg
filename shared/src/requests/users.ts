
import { PostalAddress } from "."
import { AllLanguages, AllNotificationTemplates, AllOSTypes, LanguageParams, Remove, RequestContent, RequestData } from ".."
import { AllEmailTemplates } from "./emails"
export interface User {
  _id: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  phone?: string
  password: string
  language?: AllLanguages
  role: "standard" | "admin"
  creationDate: string
  emailToken?: EmailToken
  secureId: string
  secureIdVerif: string
}

export type PublicUser = Remove<User, "password" | "emailToken" | "secureId" | "secureIdVerif">
export interface EmailToken {
  token: string
  oldEmail: string
  newEmail: string
}


export type UserRequests = RequestContent<{
  createOne: RequestData<
    Pick<User, "firstName" | "lastName" | "email" | "password"> & LanguageParams & { os: AllOSTypes, token?: string, deviceId: string },
    {
      user: Remove<User,
        "password"
        | "emailToken"
        | "secureId"
        | "secureIdVerif">
      sessionId: string
      secureId: string
    } | undefined
  >
  updateOne: RequestData<
    Partial<Remove<User, "emailToken" | "creationDate" | "_id" | "fullName">> & {
      token?: string
      isResendingToken?: boolean
      isCancelToken?: boolean
      forgotPasswordEmail?: string
      oldPassword?: string
    } & LanguageParams,
    undefined
  >
  deleteOne: RequestData<
    { _id?: string },
    undefined
  >
  getCurrent: RequestData<
    {},
    undefined,
    (PublicUser & { isEmailToken?: boolean }) | undefined
  >
  getOne: RequestData<
    Pick<User, "_id">,
    Remove<User, "password" | "email" | "phone" | "role" | "creationDate">
    & Partial<Pick<User, "email" | "phone">>
  >
  getMany: RequestData<
    {},
    Remove<User, "password">[]
  >
  forgotPassword: RequestData<
    Pick<User, "email"> & LanguageParams,
    undefined
  >
}>