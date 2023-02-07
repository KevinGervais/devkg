import { IS_DEV } from "."
import { OS } from "./OS"

export const IS_CORDOVA: boolean =
  (OS === "android" || OS === "ios" || OS === "ipad")
  && !IS_DEV
  && !window.location.hostname.match(
    /^[0-9.]+$/
  )
  && !window.location.hostname.includes("devkg")
// export const IS_CORDOVA: boolean = true