import { AllLanguages, AnyAddress, Remove, User } from "@/shared"


export interface LocalStorageData {
  sessionId: string | undefined
  secureId: string | undefined
  deviceId: string
  isShowTermsWarning: boolean
  currentUser: Remove<User,
    "password"
    | "emailToken"
    | "secureId"
    | "secureIdVerif"
  > & { isEmailToken?: boolean } | undefined
  selectedLanguage: AllLanguages | undefined
  lastAppVersion: string | undefined
}
