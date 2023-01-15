import { Store, applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import { IS_DEV } from "@/constants"
import { languages } from "@/languages/reducer"
import { login } from "@/pages/Login/reducer"
import { settings } from "@/pages/Settings/reducer"
import { signIn } from "@/pages/SignIn/reducer"
import { popups } from "@/popups/reducer"
import { customCombineReducers } from "@/redux/customCombineReducers"
import { getReduxInitState } from "@/redux/getReduxInitState"
import { routes } from "@/routes/reducer"
import { ui } from "@/ui/reducer"
import { users } from "@/users/reducer"

import { ReduxState } from "./model"

export function initStore(): Store {
  return createStore(
    (state: ReduxState = getReduxInitState(), action: any): ReduxState => customCombineReducers({
      languages,
      ui,
      users,
      popups,
      login,
      settings,
      signIn,
      routes,
    }, state, action),
    IS_DEV ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk),
  )
}