import { LoginState } from "./model"

export function getLoginInitState(): LoginState {
  return {
    emailField: sessionStorage.getItem("email") || "",
    passwordField: "",
    isSownPassword: false
  }
}