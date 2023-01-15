import { Redirect as RedirectComp } from "react-router-dom"

import { RedirectProps } from "../model"
export function Redirect({ from, to, isExact }: RedirectProps): JSX.Element {
  return <RedirectComp exact={isExact} from={from} to={to} />
}