import { createBrowserHistory, createHashHistory } from "history"

import { IS_CORDOVA } from "@/constants"
import { setReduxState } from "@/redux"

import { AllRoutes } from "../model"

export const BROWSER_HISTORY = IS_CORDOVA ? createHashHistory({ basename: "", }) : createBrowserHistory()
const firstPath = BROWSER_HISTORY.location.pathname.split("/")[1] as AllRoutes
if (firstPath) {
  window.document.title = `DevKG Inc. - ${firstPath}`
} else {
  window.document.title = "DevKG Inc."
}

BROWSER_HISTORY.listen(location => {
  setReduxState("routes", { pathName: location.pathname })
})