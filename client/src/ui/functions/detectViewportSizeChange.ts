import { IS_CORDOVA, IS_DESKTOP } from "@/constants"
import { throttle } from "@/functions"
import { getReduxState, setReduxState } from "@/redux"

import { getScreenDimensions, handleNotchPositionChange } from "."
import { breakpoints } from "../mixins"
import { UIState } from "../model"

function detectViewportSizeChangeNotThrottled(evt: Event): void {
  window.setTimeout(() => {
    const { isLandscape: oldIsLandscape, screenWidth, vw, vh } = getReduxState().ui
    const [sm, md, lg, xl] = Object.keys(breakpoints).map((breakpointName: string) => (
      Number(breakpoints[breakpointName as keyof typeof breakpoints].replace("px", ""))
    )) as [number, number, number, number]
    const newState: Partial<UIState> = {

    }
    if (window.innerWidth < sm && screenWidth !== "xm") {
      newState.screenWidth = "xm"
    } else if (window.innerWidth >= sm && window.innerWidth < md && screenWidth !== "sm") {
      newState.screenWidth = "sm"
    } else if (window.innerWidth >= md && window.innerWidth < lg && screenWidth !== "md") {
      newState.screenWidth = "md"
    } else if (window.innerWidth >= lg && window.innerWidth < xl && screenWidth !== "lg") {
      newState.screenWidth = "lg"
    } else if (window.innerWidth >= xl && screenWidth !== "xl") {
      newState.screenWidth = "xl"
    }
    const isNewLandscape = window.innerWidth >= window.innerHeight
    if (oldIsLandscape !== isNewLandscape) {
      newState.isLandscape = isNewLandscape
    }
    const { width, height } = getScreenDimensions()
    if (vw !== width || vh !== height) {
      newState.vw = width
      newState.vh = height
      if (!IS_DESKTOP && vh! < height && vw === width && window.document.activeElement) {
        const elem = window.document.activeElement as HTMLElement
        if (elem.blur) {
          elem.blur()
        }
      }
    }
    if (Object.keys(newState).length) {
      setReduxState("ui", newState, () => {
        if (IS_CORDOVA) {
          handleNotchPositionChange()
        }
      })
    }
  }, 30)
}

export const detectViewportSizeChange = throttle(detectViewportSizeChangeNotThrottled, 30)