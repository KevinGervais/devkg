import { tw } from "@/shared"

import { IS_CORDOVA, IS_DESKTOP, OS } from "@/constants"

import { TitleBarStyled } from "./TitleBarStyled"

export const TitleBar = () => {
  if (
    IS_DESKTOP || !IS_CORDOVA || OS === "android"
  ) {
    return null
  }
  return (
    <TitleBarStyled
      className={tw`
        z-[10000]
        flex
        w-full
        pointer-events-none
        h-5
        shrink-0
        bg-primary-500
        ${OS === "mac" && "fixed"}
      `}
    />
  )
}
