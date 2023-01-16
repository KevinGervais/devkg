import axios, { AxiosResponse, CancelToken } from "axios"

import { AllCollections, AllRequests, ErrorMessages, RequestData } from "@/shared"

import { IS_DEV } from "@/constants"
import { getReduxState, setReduxState } from "@/redux"

import { undefinedToNull } from "./undefinedToNull"


export function handleHttpRequest<Collection extends AllCollections, Path extends keyof AllRequests[Collection]>(
  collection: Collection,
  path: Path,
  {
    cancelToken,
    isLoadingHidden,
    ...data
  }: AllRequests[Collection][Path] extends RequestData<any, any>
    ? (AllRequests[Collection][Path]["params"] & { cancelToken?: CancelToken, isLoadingHidden?: boolean })
    : never,
  successCalback?: (
    data: AllRequests[Collection][Path] extends RequestData<any, any>
      ? AllRequests[Collection][Path]["result"]
      : never
  ) => void,
  errorCalback?: (data: ErrorMessages) => void,

): void {
  if (!isLoadingHidden) {
    setReduxState("ui", { loadingCount: getReduxState().ui.loadingCount + 1 })
  }

  const url = IS_DEV ? "http://localhost:8080" : `https://kevingervais.herokuapp.com`
  axios({
    url: `${url}/api/${collection}/${path as string}`,
    method: "post",
    cancelToken,
    data: undefinedToNull(data),
  }).then((response: AxiosResponse) => {
    if (!isLoadingHidden) {
      setReduxState("ui", { loadingCount: getReduxState().ui.loadingCount - 1 })
    }
    if (successCalback) {
      successCalback(response.data)
    }
  }).catch((error: any) => {
    if (!isLoadingHidden) {
      setReduxState("ui", { loadingCount: getReduxState().ui.loadingCount - 1 })
    }
    if (errorCalback && (error?.response?.data)) {
      errorCalback(IS_DEV ? error?.response?.data || error.message : error?.response?.data)
    }
  })
}
