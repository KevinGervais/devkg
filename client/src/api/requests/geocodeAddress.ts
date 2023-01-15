import { AddressRequests, AnyAddress, Remove } from "@/shared"

import { handleSocketRequest } from "@/api/functions"
import { getReduxState, setReduxState } from "@/redux"

export function geocodeAddress({
  isLoadingHidden, ...query
}: Remove<AddressRequests["geocode"]["params"], "language">
  & { isLoadingHidden: boolean }
): Promise<AnyAddress[]> {
  const { selectedLanguage } = getReduxState().languages
  return new Promise(resolve => {
    handleSocketRequest(
      "addresses",
      "geocode",
      {
        ...query,
        language: selectedLanguage,
        isLoadingHidden
      }, data => {
        resolve(data)
      }, error => {
        setReduxState("ui", { snackbar: { message: error, severity: "error" } })
      })
  })
}