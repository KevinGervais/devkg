import { Switch } from "react-router-dom"

import { tw } from "@/shared"

import { Footer, GlobalStyle, Loading, Nav, ShowTermsWarning, Snackbar, TitleBar } from "@/components"
import * as pages from "@/pages"
import { ActivePopup } from "@/popups"

import { AnyRoute } from "./AnyRoute"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { Redirect } from "./Redirect"
export function Routes(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <div className={tw`app-routes col`}>
        <TitleBar />
        <Snackbar />
        <Loading />
        <ShowTermsWarning />
        <ActivePopup />
        <Nav />
        <div className="col mt-[60px]">
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
        <Footer />
      </div>
    </>
  )
}
