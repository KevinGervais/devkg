import { setReduxState } from "@/redux"

import { handleSocketRequest } from "../functions"

export function deleteOneBug(_id: string, callback: () => void): void {
  handleSocketRequest("bugs", "deleteOne", {
    _id
  }, () => {
    setReduxState("ui", {
      snackbar: {
        message: "deleteBugSuccess",
        severity: "success"
      }
    }, () => {
      callback()
      setReduxState("popups", { name: undefined })
    })
  })

}