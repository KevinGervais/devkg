import { useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"

import { Icon } from "../Icon"
import { DownloadAppStyled } from "./DownlaodAppStyled"
import { DownloadAppProps } from "./model"

export function DownloadApp({ type }: DownloadAppProps): JSX.Element {
  const { say } = useReduxState((state: ReduxState) => ({
    say: state.languages.say
  }))
  return (
    <DownloadAppStyled className="clickable">
      {type === "ios" && <Icon type="brands" name="apple" />}
      {type === "android" && <img alt="google-play-icon" src="/images/gplay.svg" />}
      <div>
        <span>{type === "ios" ? say.downloadOnThe : say.getItOn}</span>
        <h4>{type === "ios" ? say.appleStore : say.googlePlay}</h4>
      </div>
    </DownloadAppStyled>
  )
}

