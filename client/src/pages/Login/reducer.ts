import { SetAction } from "@/redux/model"


import { LoginState } from "./model"

export const login = (currentState: LoginState, action: SetAction<"login">) => {
  const data = action.data
  return {
    ...currentState,
    ...data
  }
}