import { SettingsState } from "@/pages/Settings/model"
import { ReduxState, SetAction } from "@/redux/model"

export const settings = (currentState: SettingsState, action: SetAction<"settings">, globalState?: ReduxState) => {
  const data = { ...action.data }
  return {
    ...currentState,
    ...data
  }
}