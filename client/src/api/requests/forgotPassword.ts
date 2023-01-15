import { AllRequests } from "@/shared"

import { handleSocketRequest } from "@/api/functions"
import { setReduxState } from "@/redux"

export function forgotPassword({ email, language }: AllRequests["users"]["updateOne"]["params"]): void {
  handleSocketRequest(
    "users",
    "updateOne",
    {
      forgotPasswordEmail: email,
      language
    }, () => {
      setReduxState("ui", { snackbar: { message: "passwordSent", severity: "success" } })

    })
}