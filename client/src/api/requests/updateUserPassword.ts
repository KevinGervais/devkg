import { handleSocketRequest } from "@/api/functions"
import { getReduxState, setReduxState } from "@/redux"

export function updateUserPassword(oldPassword: string, newPassword: string, confirmedPassword: string): void {
  if (newPassword !== confirmedPassword) {
    setReduxState("ui", {
      snackbar: {
        message: "passwordNotMatching",
        severity: "error"
      }
    })
    return
  }
  handleSocketRequest(
    "users",
    "updateOne",
    {
      oldPassword,
      password: newPassword,
      language: getReduxState().languages.selectedLanguage
    },
    () => {
      setReduxState("ui", {
        snackbar: {
          message: "passwordSuccess",
          severity: "success"
        },
      })
      setReduxState("popups", {
        name: undefined
      })
    })
}