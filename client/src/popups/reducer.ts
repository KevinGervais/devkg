
import { SetAction } from "../redux/model"
import { AllPopupNames, PopupState } from "./model"

export const popups = (currentState: PopupState<AllPopupNames>, action: SetAction<"popups">) => {
  const data = { ...action.data }
  if (data.name && data.hasOwnProperty("props") && !data.props) {
    data.props = {} as any
  }
  if (data.hasOwnProperty("name") && !data.name) {
    data.props = undefined
  }
  return {
    ...currentState,
    ...data
  }
}