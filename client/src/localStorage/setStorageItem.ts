import { fromAES, generateId, toAES } from "@/shared"

import { initStorage } from "./initStorage"
import { LocalStorageData } from "./model"

let hasInit: boolean = false

export function setStorageItem<Key extends keyof LocalStorageData>(
  key: Key,
  value: LocalStorageData[Key] | undefined
): void {
  try {
    const strValue = window.localStorage.getItem("q")
    if (strValue && strValue.length > 24) {
      const storageId = strValue?.slice(0, 24)
      const data: any = fromAES(strValue.slice(24), storageId, () => initStorage())
      data[key] = value
      const newStorageId = generateId()
      const finalData = toAES(data, newStorageId)!
      window.localStorage.setItem("q", `${newStorageId}${finalData}`)
    } else {
      if (!hasInit) {
        hasInit = true
        initStorage()
        setStorageItem(key as any, value)
      }
    }
  } catch (err) {
    if (!hasInit) {
      hasInit = true
      initStorage()
      setStorageItem(key as any, value as any)
    }
  }
}