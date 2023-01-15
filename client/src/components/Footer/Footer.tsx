import { NavLink } from "react-router-dom"


import { APP_VERSION } from "@/constants"
import { setReduxState, useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"

import { Icon } from "../Icon"
import { FooterStyled } from "./FooterStyled"

export function Footer(): JSX.Element | null {
  const { say } = useReduxState((state: ReduxState) => ({
    say: state.languages.say,
    firstPath: state.routes.firstPath,
    isSm: state.ui.screenWidth === "xm" || state.ui.screenWidth === "sm",
  }))
  return (
    <FooterStyled className="!mt-8">
      <div className="top-content">
        <section>
          <h3>{say.quickLinks}</h3>
          <NavLink to="terms">{say.termsAndConditions}</NavLink>
          <NavLink to="privacy">{say.privacyPolicy}</NavLink>
          <div
            className="modal-button"
            onClick={() => setReduxState("popups", { name: "BugReport" })}
          >
            {say.bugReport}
          </div>
        </section>
      </div>
      <div className="bottom-content">
        <span>© 2021 KevinGervais{` ${say.allRightsReserved} - ${APP_VERSION}`} </span>
        <div className="icons">
          <Icon className="center shade-text-white-grey" type="brands" name="facebook" />
          <Icon className="center shade-text-white-grey" type="brands" name="twitter" />
          <Icon className="center shade-text-white-grey" type="brands" name="instagram" />
        </div>
      </div>
    </FooterStyled>
  )
}