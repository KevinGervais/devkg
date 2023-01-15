import { IS_CORDOVA } from "@/constants"
import { useReduxState } from "@/redux"

import { GlobalStyled } from "./GlobalStyled"

export function GlobalStyle(): JSX.Element {
  const { vw, vh } = useReduxState(state => ({
    vw: IS_CORDOVA ? state.ui.vw : undefined,
    vh: IS_CORDOVA ? state.ui.vh : undefined,
  }))
  return (
    <GlobalStyled
      vw={vw}
      vh={vh}
    />
  )
}