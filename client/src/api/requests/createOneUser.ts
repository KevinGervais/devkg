import { Remove, UserRequests } from "@/shared"

import { OS } from "@/constants"
import { isMissingField } from "@/functions"
import { setStorageItem } from "@/localStorage"
import { getReduxState, setReduxState } from "@/redux"
import { goToExactPath } from "@/routes"

import { handleSocketRequest, launchAllRequests } from "../functions"
import { launchAllEvents } from "../functions/launchAllEvents"

export function createOneUser(
  user: Remove<UserRequests["createOne"]["params"], "deviceId" | "os" | "language"> & { confirmedPassword?: string },
  callback?: () => void
): void {
  const { deviceId } = getReduxState().settings
  const { selectedLanguage } = getReduxState().languages
  if (user.password !== user.confirmedPassword) {
    setReduxState("ui", {
      snackbar: {
        message: "passwordNotMatching",
        severity: "error"
      }
    })
    return
  }
  const query = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    token: user.token,
    deviceId
  }

  if (isMissingField(
    !user.firstName,
    !user.lastName,
    !user.email
  )) {
    return
  }
  handleSocketRequest(
    "users",
    "createOne",
    {
      ...query,
      os: OS,
      language: selectedLanguage
    },
    data => {
      if (data) {
        goToExactPath("/dashboard")
        setReduxState("users", { currentUser: data.user }, () => {
          setReduxState("popups", {
            name: "LargeMessage",
            props: {
              title: getReduxState().languages.say.userCreateSuccess,
              iconName: "smile"
            }
          })
        })
        setStorageItem("sessionId", data.sessionId)
        setStorageItem("secureId", data.secureId)
        launchAllEvents()
        launchAllRequests()
      }
      if (callback) {
        callback()
      }
    })
}