import { SocketIo } from "@/api/classes"
import { createOneSession } from "@/api/requests"
import { KeyboardEventHandler } from "@/classes"
import { APP_VERSION, IS_CORDOVA, IS_DESKTOP, OS } from "@/constants"
import { setStorageItem } from "@/localStorage"
import { getReduxState, setReduxState } from "@/redux"
import { detectViewportSizeChange, handleNotchPositionChange } from "@/ui/functions"

import { isIOSNotch } from "."


export function onAppStart(): void {
  setStorageItem("lastAppVersion", APP_VERSION)

  SocketIo.launch()
  window.addEventListener("dragover", (evt: DragEvent) => evt.preventDefault())
  window.addEventListener("drop", (evt: DragEvent) => evt.preventDefault());
  (window.visualViewport || window).addEventListener("resize", detectViewportSizeChange)
  window.addEventListener("orientationchange", detectViewportSizeChange)


  if (!IS_DESKTOP) {
    const keyboardEventHandler = new KeyboardEventHandler()
    keyboardEventHandler.onShow(() => {
      if (!getReduxState().ui.isKeyboard) {
        setReduxState("ui", { isKeyboard: true })
      }
    })
    keyboardEventHandler.onHide(() => {
      if (getReduxState().ui.isKeyboard) {
        setReduxState("ui", { isKeyboard: false })
      }
    })
  }

  document.addEventListener("deviceready", () => {
    if (!IS_CORDOVA) {
      return
    }
    document.addEventListener("resume", () => {
      createOneSession({})
    })
    if (window.cordova && window.cordova.plugins.Keyboard) {
      window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(
        false
      )
      window.cordova.plugins.Keyboard.disableScroll(true)
    }

    if (OS === "android" || (OS === "ios" && isIOSNotch())) {
      handleNotchPositionChange()
    }
  })
}