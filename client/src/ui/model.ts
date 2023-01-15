import { AllSeverityColors, SayKeywordStrings } from "@/shared"

import { NotchPosition } from "@/model"
import { PopupState } from "@/popups/model"
import { breakpoints } from "@/ui/mixins"

export interface UIState {
  isShowTermsWarning: boolean
  notchPosition: NotchPosition
  isLandscape: boolean
  screenWidth: Breakpoints
  isDragHover: boolean
  loadingCount: number
  isKeyboard: boolean
  loginRedirect?: {
    pathName?: string
    popup?: PopupState<any>
  }
  snackbar?: {
    message: SayKeywordStrings
    severity: AllSeverityColors
    _id?: string
  }
  vw?: number
  vh?: number
}


export type Breakpoints = "xm" | keyof typeof breakpoints
