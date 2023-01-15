import { getStorageItem } from "@/localStorage"

import { getScreenBreakpoint } from "."
import { UIState } from "../model"

export function getUiInitState(): UIState {
  return {
    isShowTermsWarning: getStorageItem("isShowTermsWarning") === null ? true : false,
    notchPosition: undefined,
    screenWidth: getScreenBreakpoint(),
    loadingCount: 0,
    isDragHover: false,
    isLandscape: window.innerWidth >= window.innerHeight,
    snackbar: undefined,
    isKeyboard: false,
  }
}


