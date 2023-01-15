import { generateId } from "@/shared"

import { getStorageItem, setStorageItem } from "@/localStorage"

import { SettingsState } from "../model"

export function getSettingsInitState(): SettingsState {
  let deviceId = getStorageItem("deviceId")
  if (!deviceId) {
    deviceId = generateId()
    setStorageItem("deviceId", deviceId)
  }

  return {
    deviceId,
  }
}

