import { AllRoutes, RoutesState } from "@/routes/model"
import { resetScrollTop } from "@/ui/functions"

import { SetAction } from "../redux/model"

export const routes = (currentState: RoutesState, action: SetAction<"routes">) => {
  const data = action.data
  if (data.pathName) {
    const pathList = data.pathName.split("/")
    data.lastPath = pathList[pathList.length - 1] as string
    data.firstPath = pathList[1] as AllRoutes || ""
    data.oldPathName = currentState.pathName
    data.oldFirstPath = currentState.firstPath
    data.oldLastPath = currentState.lastPath
    window.document.getElementById("root")!.scrollTop = 0
    resetScrollTop()
    if (data.firstPath) {
      window.document.title = `KevinGervais - ${data.firstPath}`
    } else {
      window.document.title = "KevinGervais"
    }
  }
  return {
    ...currentState,
    ...data
  }
}