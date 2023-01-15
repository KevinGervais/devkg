import { AllLanguages, Remove, SayKeywordStrings, UserRequests } from "@/shared"

import { handleSocketRequest } from "@/api/functions"
import { getReduxState, setReduxState } from "@/redux"
export function updateOneUser(
  { customSuccessMessage, ...query }: (
    Remove<UserRequests["updateOne"]["params"], "language"> & { language?: AllLanguages }
    & { isLoadingHidden?: boolean, customSuccessMessage?: SayKeywordStrings }
  ),
  callback?: (data: UserRequests["updateOne"]["result"]) => void
): void {
  handleSocketRequest(
    "users",
    "updateOne",
    {
      language: getReduxState().languages.selectedLanguage,
      ...query,
    }, data => {
      if (callback) {
        callback(data)
      }
      if (!query.isLoadingHidden) {
        setReduxState("ui", {
          snackbar: {
            message: customSuccessMessage || "userUpdateSuccess",
            severity: "success"
          },
        })

      }
    }
  )
}