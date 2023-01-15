import ReactDOM from "react-dom"

import { IS_CORDOVA, OS } from "@/constants"
import { getReduxState } from "@/redux"

import { BROWSER_HISTORY } from "../constants/BROWSER_HISTORY"
import { AllRoutes } from "../model"


export function goToExactPath(path: `/${AllRoutes}`, id?: string | string[], evt?: MouseEvent | React.MouseEvent): void {
  const { pathName } = getReduxState().routes
  const idList = typeof id === "string" ? [id] : id || []
  const finalPath = path.includes(":") && id ? path.split(/:[a-z]+/).map((str, index) => `${str}${idList[index] || ""}`).join("") : `${path}${id ? `/${id}` : ""}`

  if (
    evt
    && (
      (
        (OS === "windows" || OS === "linux") && evt.ctrlKey)
      || (OS === "mac" && evt.metaKey)
    ) && !IS_CORDOVA
  ) {
    const containerEl = document.createElement("div")
    ReactDOM.createPortal(null, containerEl)
    const externalWindow = window.open(finalPath, "_blank")
    if (externalWindow) {
      externalWindow.document.body.appendChild(containerEl)
    }
  } else {
    const firstPath = "/" + pathName.split("/")[1]
    if (firstPath !== pathName) {

      BROWSER_HISTORY.replace(firstPath)
    }
    BROWSER_HISTORY.push(finalPath)
  }
}