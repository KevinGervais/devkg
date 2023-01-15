import { useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"

import { AboutUsStyled } from "./AboutUsStyled"

export const AboutUs = () => {
  useReduxState((state: ReduxState) => ({
    say: state.languages.say,
  }))
  return (
    <AboutUsStyled />
  )
}
