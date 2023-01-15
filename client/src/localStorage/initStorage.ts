import { generateId, toAES } from "@/shared"

import { LocalStorageData } from "./model"

export function initStorage(): void {
  const storageId = generateId()
  const data: LocalStorageData = {
    selectedLanguage: undefined,
    lastAppVersion: undefined,
    notificationRegistrationId: undefined,
    sessionId: undefined,
    secureId: undefined,
    currentUser: undefined,
    deviceId: generateId(),
    isShowTermsWarning: true,
    currentLocation: undefined,
    favoriteCommerceList: [],
  }
  const finalData = toAES(data, storageId)!
  window.localStorage.setItem("q", `${storageId}${finalData}`)
}