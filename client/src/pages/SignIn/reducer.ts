import { SetAction } from "@/redux/model"

import { SignInState } from "./model"


export function signIn(currentState: SignInState, action: SetAction<"signIn">): SignInState {
  const data = { ...action.data }
  return {
    ...currentState,
    ...data
  }
}