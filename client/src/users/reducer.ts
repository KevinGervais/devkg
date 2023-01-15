
import { setStorageItem } from "@/localStorage"

import { SetAction } from "../redux/model"
import { UsersState } from "./model"


export const users = (currentState: UsersState, action: SetAction<"users">) => {
  const data = { ...action.data }
  if (data.currentUser) {
    setStorageItem("currentUser", data.currentUser)
    data.userMap = { ...(data.userMap || currentState.userMap), [data.currentUser._id]: data.currentUser }
  }
  return {
    ...currentState,
    ...data
  }
}