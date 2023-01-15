import { PHONES_WITH_NOTCH } from "@/ui/constants/PHONES_WITH_NOTCH"

export function isIOSNotch(): boolean {
  if (window.device && (
    PHONES_WITH_NOTCH.includes(window.device.model as typeof PHONES_WITH_NOTCH[number])
    || Number(window.device.model.replace("iPhone", "").split(",")[0]) >= 13
  )) {
    return true
  } else {
    return false
  }
}