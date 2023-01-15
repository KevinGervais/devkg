import dayjs from "dayjs"
import { NavLink } from "react-router-dom"

import { APP_VERSION } from "@/constants"
import { setReduxState, useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"

import { Button } from "../Button"

export function Footer(): JSX.Element | null {
  const { say } = useReduxState((state: ReduxState) => ({
    say: state.languages.say,
    firstPath: state.routes.firstPath,
    isSm: state.ui.screenWidth === "xm" || state.ui.screenWidth === "sm",
  }))
  return (
    <div className="w-full pt-4 bg-white sm:px-10">
      <div className="flex justify-center mb-2 children:mx-2 hover:children:underline children:clickable children:shade-text-grey-600">
        <NavLink to="terms">{say.termsAndConditions}</NavLink>
        <NavLink to="privacy">{say.privacyPolicy}</NavLink>
        <div
          className="modal-button"
          onClick={() => setReduxState("popups", { name: "BugReport" })}
        >
          {say.bugReport}
        </div>
      </div>
      <div className="flex col sm:!row  items-center justify-between w-full px-5 border-t border-solid py-3 border-grey-400 children:text-grey-600">
        <span className="mb-3 sm:mb-0">{`© ${dayjs().get("year")} Kevin Gervais ${say.allRightsReserved} - ${APP_VERSION}`} </span>
        <div className="flex not-last-children:mr-2">
          <Button isCircle={true} variant="outlined" color="grey" shade={500} iconType="brands" iconName="facebook" />
          <Button isCircle={true} variant="outlined" color="grey" shade={500} iconType="brands" iconName="twitter" />
          <Button isCircle={true} variant="outlined" color="grey" shade={500} iconType="brands" iconName="instagram" />
        </div>
      </div>
    </div>
  )
}