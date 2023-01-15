import { IS_DESKTOP } from "@/constants"

export function copyToClipboard(str: string): void {
  if (
    !IS_DESKTOP
    && window.cordova
    && window.cordova.plugins
    && window.cordova.plugins.clipboard
  ) {
    window.cordova.plugins.clipboard.copy(str)
  } else if (window.navigator && window.navigator.clipboard && window.navigator.clipboard.writeText) {
    window.navigator.clipboard.writeText(str)
  }
}