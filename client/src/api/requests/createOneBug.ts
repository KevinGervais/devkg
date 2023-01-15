import { PublicFile } from "@/shared"

import { APP_VERSION, IS_CORDOVA, OS } from "@/constants"
import { getReduxState, setReduxState } from "@/redux"

import { handleSocketRequest } from "../functions"

export function createOneBug(message: string, imageFileList: PublicFile[]): void {
  const reduxState = getReduxState()
  const { settings } = reduxState
  const { deviceId } = settings

  handleSocketRequest("bugs", "createOne", {
    appVersion: APP_VERSION,
    deviceId,
    operatingSystem: OS,
    userAgent: navigator.userAgent,
    message,
    isCordova: IS_CORDOVA,
    imageFileList
  }, () => {
    setReduxState("ui", {
      snackbar: {
        message: "createBugSuccess",
        severity: "success"
      }
    }, () => {
      setReduxState("popups", { name: undefined })
    })
  })

}