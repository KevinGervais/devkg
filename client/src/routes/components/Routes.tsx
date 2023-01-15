import { Switch } from "react-router-dom"

import { tw } from "@/shared"

import { Footer, GlobalStyle, Loading, ShowTermsWarning, Snackbar, TitleBar } from "@/components"
import { IS_CORDOVA, IS_DESKTOP } from "@/constants"
import * as pages from "@/pages"
import { ActivePopup } from "@/popups"
import { useReduxState } from "@/redux"

import { AnyRoute } from "./AnyRoute"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { Redirect } from "./Redirect"
export function Routes(): JSX.Element {
  const isFullScreen = useReduxState(state =>
    state.ui.screenWidth === "xm"
    || state.ui.screenWidth === "sm"
    || !IS_DESKTOP
  )

  return (
    <>
      <GlobalStyle />
      <div className={tw`app-routes col`}>
        <TitleBar />
        <Snackbar />
        <Loading />
        <ShowTermsWarning />
        <ActivePopup />
        <div className="flex-1">
          <Switch>
            <AnyRoute isExact={true} path="/home" component={pages.Home} />
            <AnyRoute isExact={true} path="/about-us" component={pages.AboutUs} />
            <AnyRoute isExact={true} path="/not-found" component={pages.NotFound} />
            <AnyRoute isExact={true} path="/privacy" component={pages.Privacy} />
            <AnyRoute isExact={true} path="/terms" component={pages.Terms} />
            <PublicRoute isExact={true} path="/forgot-password" component={pages.ForgotPassword} />
            <PublicRoute isExact={true} path="/login" component={pages.Login} />
            <PublicRoute isExact={true} path="/signin" component={pages.SignIn} />
            <PrivateRoute path="/bug-report" component={pages.BugReport} />
            <Redirect isExact={true} from="/" to="/home" />
            <Redirect isExact={true} from="/*" to="/not-found" />
          </Switch>
        </div>
        {!IS_CORDOVA && !isFullScreen && <div className="h-16" />}
        <Footer />
      </div>
    </>
  )
}
