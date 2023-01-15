import { getStorageItem } from "@/localStorage"

import { UsersState } from "./model"

export function getUsersInitState(): UsersState {
  return {
    currentUser: getStorageItem("currentUser") || undefined,
    isSessionLoaded: false,
    userMap: {},
    shownUserCount: 20,
  }
}
