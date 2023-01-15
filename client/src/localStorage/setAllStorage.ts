import { generateId, toAES } from "@/shared"

import { LocalStorageData } from "./model"

export function setAllStorage(
  data: { [key in keyof LocalStorageData]: LocalStorageData[key] },
): void {
  const storageId = generateId()
  const finalData = toAES(data, storageId)!
  window.localStorage.setItem("q", `${storageId}${finalData}`)
}