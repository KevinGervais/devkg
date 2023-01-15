import { Remove, RequestContent, RequestData } from ".."
import { User } from "./users"

export interface Session {
  _id: string
  userId: string
  userAgent: string
  deviceId: string
  notificationRegistrationId?: string
  creationDate: string
}

export type SessionRequests = RequestContent<{
  createOne: RequestData<
    Partial<Pick<User, "email" | "password"> & Pick<Session, "userId" | "deviceId" | "notificationRegistrationId"> & { sessionId?: string, secureId?: string }>,
    {
      user: (Remove<User,
        "password"
        | "emailToken"
        | "secureId"
        | "secureIdVerif"
      > & { isEmailToken?: boolean })
      sessionId?: string
      secureId?: string
    }
  >
  deleteOne: RequestData<
    Pick<Session, "deviceId">,
    undefined
  >
}>