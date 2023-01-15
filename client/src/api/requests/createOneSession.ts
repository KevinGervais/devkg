import { PublicUser, User } from "@/shared"

import { getStorageItem, setStorageItem } from "@/localStorage"
import { getReduxState, setReduxState } from "@/redux"

import { SocketIo } from "../classes"
import { handleSocketRequest, launchAllRequests } from "../functions"
import { launchAllEvents } from "../functions/launchAllEvents"
import { deleteOneSession } from "./deleteOneSession"

export function createOneSession(
  {
    email,
    password,
  }: Partial<Pick<User, "email" | "password">>,
  callback?: (user: (PublicUser & { isEmailToken?: boolean })) => void
): void {
  const { deviceId } = getReduxState().settings
  const sessionId = getStorageItem("sessionId") || undefined
  const userId = getStorageItem("currentUser")?._id
  const secureId = getStorageItem("secureId") || undefined
  handleSocketRequest(
    "sessions",
    "createOne",
    email !== undefined ? { email, password, deviceId, secureId } : {
      sessionId,
      userId,
      deviceId,
      secureId,
    }, data => {

      SocketIo.launchCallbackArray()
      if (data.user.isEmailToken) {
        setReduxState("popups", { name: "ValidateToken" })
      }
      if (!data.sessionId) {
        setReduxState("users", {
          isSessionLoaded: true,
          currentUser: data.user
        }, () => {
          launchAllEvents()
          launchAllRequests()
          if (callback) {
            callback(data.user)
          }
        })
      } else {
        setStorageItem("sessionId", data.sessionId)
        setStorageItem("secureId", data.secureId)
        setReduxState("users", { currentUser: data.user }, () => {
          launchAllEvents()
          launchAllRequests()
          if (callback) {
            callback(data.user)
          }
        })
      }
    }, error => {
      SocketIo.launchCallbackArray()
      if (email !== undefined) {
        setReduxState("ui", { snackbar: { message: error, severity: "error" } })
      } else {
        deleteOneSession(true)
      }
    })
}