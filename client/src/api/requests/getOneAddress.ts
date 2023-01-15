import { Args, PostalAddress } from "@/shared"

import { handleSocketRequest } from "@/api/functions"
import { setReduxState } from "@/redux"

export function getOneAddress
  <Params>
  (
    query: {
      _id: string,
      params?: Params,
      isLoadingHidden?: boolean,
    },
    callback: (address: Params extends readonly any[] ? Pick<PostalAddress, Params[number]> : PostalAddress) => void
  ): void {
  handleSocketRequest(
    "addresses",
    "getOne",
    {
      ...query,
      params: query.params as unknown as (keyof PostalAddress)[],
    },
    result => {
      callback(result as Args<typeof callback>[0])
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