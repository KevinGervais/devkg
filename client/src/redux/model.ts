import { KeysOfUnion } from "@/shared"

import { LanguagesState } from "@/languages/model"
import { LoginState } from "@/pages/Login/model"
import { SettingsState } from "@/pages/Settings/model"
import { SignInState } from "@/pages/SignIn/model"
import { AllPopupNames, PopupState } from "@/popups/model"
import { RoutesState } from "@/routes/model"
import { UIState } from "@/ui/model"
import { UsersState } from "@/users/model"


export interface ReduxState {
  languages: LanguagesState
  ui: UIState
  login: LoginState
  users: UsersState
  routes: RoutesState
  signIn: SignInState
  popups: PopupState<AllPopupNames>
  settings: SettingsState
}
export type AllReduxKeys = KeysOfUnion<ReduxState[keyof ReduxState]>


export type ReduxDidUpdateEvent<ReducerKey extends keyof ReduxState> = CustomEvent<{
  oldState: ReduxState[ReducerKey],
  data: Partial<ReduxState[ReducerKey]>
}>

export type Reducers = { [key in keyof ReduxState]: (state: ReduxState[key] | undefined, action: SetAction<key>) => ReduxState[key] }
export interface SetAction<ReducerKey extends keyof ReduxState> {
  type: `SET_${Uppercase<ReducerKey>}`
  reducerKey: ReducerKey
  data: Partial<ReduxState[ReducerKey]>
}
export interface GlobalSetAction {
  type: "SET"
  data: { [key in keyof ReduxState]: Partial<ReduxState[key]> }
}
export interface ResetAction {
  type: "RESET_ALL_STATE"
  data: ReduxState
}