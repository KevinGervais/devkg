import { getLanguagesInitState } from "@/languages/getLanguagesInitState"
import { getLoginInitState } from "@/pages/Login/getLoginInitState"
import { getSignInInitState } from "@/pages/SignIn/functions"
import { getPopupsInitState } from "@/popups/functions"
import { getRoutesInitState } from "@/routes"
import { getUiInitState } from "@/ui/functions"
import { getUsersInitState } from "@/users/getUsersInitState"

import { ReduxState } from "./model"

export function getReduxInitState(): ReduxState {
  return {
    languages: getLanguagesInitState(),
    login: getLoginInitState(),
    signIn: getSignInInitState(),
    popups: getPopupsInitState(),
    routes: getRoutesInitState(),
    ui: getUiInitState(),
    users: getUsersInitState(),
  } as any
}