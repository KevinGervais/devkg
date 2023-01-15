import { handleSocketRequest } from "@/api/functions"
import { setReduxState } from "@/redux"



export function getManyTaxes(
): void {
  handleSocketRequest(
    "taxes",
    "getMany",
    {
    },
    ({ taxes }) => {
      setReduxState("settings", { taxByStateCode: taxes })
    }, err => {
      setReduxState("ui", {
        snackbar: {
          message: err,
          severity: "error"
        }
      })
    }
  )
}