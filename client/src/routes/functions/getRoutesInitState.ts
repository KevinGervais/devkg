import { BROWSER_HISTORY } from ".."
import { AllRoutes, RoutesState } from "../model"

export function getRoutesInitState(): RoutesState {
  const pathName = BROWSER_HISTORY.location.pathname
  const pathList = pathName.split("/")
  const lastPath = pathList[pathList.length - 1] as string
  const firstPath = pathList[1] as AllRoutes || ""
  return {
    pathName,
    firstPath,
    lastPath,
    oldLastPath: undefined,
    oldFirstPath: undefined,
    oldPathName: undefined
  }
}