import { SignInState } from "../model"

export function getSignInInitState(): SignInState {
  return {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmedPassword: "",
    isPasswordSown: false,
  }
}