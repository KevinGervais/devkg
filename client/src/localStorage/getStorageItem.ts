import { fromAES } from "@/shared"

import { initStorage } from "./initStorage"
import { LocalStorageData } from "./model"

export function getStorageItem<Key extends keyof LocalStorageData>(
  key: Key,
): LocalStorageData[Key] {
  try {
    const strValue = window.localStorage.getItem("q")
    if (strValue && strValue.length > 24) {
      const storageId = strValue?.slice(0, 24)
      const data: LocalStorageData = fromAES(strValue.slice(24), storageId, () => initStorage())
      return data[key as keyof LocalStorageData] as any
    } else {
      initStorage()
      return getStorageItem(key)
    }
  } catch (error) {
    initStorage()
    return getStorageItem(key)
  }
}