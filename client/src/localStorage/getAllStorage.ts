import { fromAES } from "@/shared"

import { initStorage } from "."
import { LocalStorageData } from "./model"

export function getAllStorage(): LocalStorageData {
  let data = {} as LocalStorageData
  try {
    const strValue = window.localStorage.getItem("q")
    if (strValue && strValue.length > 24) {
      const storageId = strValue?.slice(0, 24)
      const requestedData: LocalStorageData = fromAES(strValue.slice(24), storageId, () => initStorage())
      data = requestedData
    }
  } catch (err) {
    //
  }
  return data
}