import { getAllStorage, setAllStorage } from "@/localStorage"
import { resetReduxState } from "@/redux"
import { goToExactPath } from "@/routes"

import { SocketIo } from "../classes"

export function deleteOneSession(isRedirect: boolean): void {
  const allStorageData = getAllStorage()
  setAllStorage({
    sessionId: undefined,
    secureId: undefined,
    deviceId: allStorageData.deviceId,
    isShowTermsWarning: allStorageData.isShowTermsWarning,
    currentUser: undefined,
    selectedLanguage: undefined,
    currentLocation: allStorageData.currentLocation,
    favoriteCommerceList: [],
    lastAppVersion: allStorageData.lastAppVersion,
    notificationRegistrationId: allStorageData.notificationRegistrationId,
  })
  resetReduxState()
  SocketIo.launch(true)
  if (isRedirect) {
    goToExactPath("/login")
  }
}