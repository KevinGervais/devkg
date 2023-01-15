import { AllRequests } from "@/shared"

import { handleSocketRequest } from "@/api/functions"
import { setReduxState } from "@/redux"

export function createOneEmail({
  subject,
  title,
  content,
  contentStr,
  emailList
}: AllRequests["emails"]["createOne"]["params"] & { contentStr: string }): void {
  if (
    !subject
    || !title
    || !contentStr
    || !emailList.length
  ) {
    setReduxState("ui", { snackbar: { message: "missingField", severity: "error" } }, () => {
      window.document.querySelector(".Mui-error")?.scrollIntoView({ behavior: "smooth" })
    })
    return
  }

  handleSocketRequest(
    "emails",
    "createOne",
    {
      subject,
      title,
      content,
      emailList,
    },
    () => {
      setReduxState("ui", {
        snackbar: {
          message: "emailSuccess",
          severity: "success"
        },
      })
      setReduxState("popups", {
        name: undefined
      })
    })
}