import { Remove, User } from "@/shared"

import { handleSocketRequest } from "@/api/functions"
import { setReduxState } from "@/redux"

export function getManyUsers(
  callback: (userList: Remove<User, "password">[]) => void
): void {
  handleSocketRequest(
    "users",
    "getMany",
    {},
    userList => {
      callback(userList)
    }, err => {
      setReduxState("ui", {
        snackbar: {
          message: err,
          severity: "error"
        }
      })
    }
  )
}