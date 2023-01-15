import { IdMap, Remove, User } from "@/shared"


export interface UsersState {
  userMap: IdMap<Partial<User>>
  shownUserCount: number
  currentUser?: Remove<User,
    "password"
    | "emailToken"
    | "secureId"
    | "secureIdVerif"
  > & { isEmailToken?: boolean }
  isSessionLoaded: boolean
}

export interface UserItemProps {
  user: Partial<User>
}