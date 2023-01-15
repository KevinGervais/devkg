import dayjs from "dayjs"

import { AllCollections, AllRequests, ErrorMessages, PublicRequestData, RequestData, fromAES, toAES } from "@/shared"

import { getReduxState, setReduxState } from "@/redux"

import { SocketIo } from "../classes"
import { undefinedToNull } from "./undefinedToNull"

export function handleSocketRequest<Collection extends AllCollections, Path extends keyof AllRequests[Collection]>(
  collection: Collection,
  path: Path,
  {
    isLoadingHidden,
    notCryptedKeyList,
    ...data
  }: AllRequests[Collection][Path] extends RequestData<any, any, any>
    ? (AllRequests[Collection][Path]["params"] & {
      isLoadingHidden?: boolean,
      notCryptedKeyList?: (keyof AllRequests[Collection][Path]["params"])[]
    })
    : never,
  successCalback?: (
    data: AllRequests[Collection][Path] extends RequestData<any, any, any>
      ? AllRequests[Collection][Path]["result"]
      : never
  ) => void,
  errorCalback?: (data: ErrorMessages) => void,

): void {
  const finalRequest = () => {
    if (!isLoadingHidden) {
      if (!SocketIo.getSocket()?.connected) {
        setReduxState("ui", { snackbar: { message: "noInternetConnexionFound", severity: "error" } })
      }
      setReduxState("ui", { loadingCount: getReduxState().ui.loadingCount + 1 })
    }
    window.setTimeout(() => {
      let finalData: PublicRequestData | undefined
      data = undefinedToNull(data)
      if (data.notCryptedKeyList) {
        const { publicData, privateData } = Object.keys(data).reduce((reduced: { publicData: any, privateData: any }, key) => {
          if (data.notCryptedKeyList && data.notCryptedKeyList.includes(key)) {
            reduced.publicData[key] = data[key]
          } else {
            reduced.privateData[key] = data[key]
          }
          return reduced
        }, { publicData: { requestDate: dayjs().toISOString() }, privateData: {} })
        finalData = {
          content: toAES(privateData, SocketIo.getSharedKey()!),
          data: publicData,
        }
      } else {
        finalData = {
          content: toAES(data, SocketIo.getSharedKey()!),
          data: { requestDate: dayjs().toISOString() }
        }
      }
      SocketIo.getSocket()!.emit(`/api/${collection}/${path as string}`, finalData, (
        response: {
          data?: AllRequests[Collection][Path] extends RequestData<any, any>
          ? AllRequests[Collection][Path]["result"]
          : never
          crypted?: string,
          error?: ErrorMessages
        }
      ) => {
        if (!isLoadingHidden) {
          setReduxState("ui", { loadingCount: getReduxState().ui.loadingCount - 1 })
        }
        if (response.error) {
          if (response.error === "tryAgain") {
            return SocketIo.launch()
          }
          if (errorCalback) {
            errorCalback(response.error)
          } else {
            setReduxState("ui", { snackbar: { message: response.error, severity: "error" } })
          }
        } else {
          if (successCalback) {
            if (response.crypted) {
              response.data = fromAES(response.crypted, SocketIo.getSharedKey()!, () => SocketIo.launch())
            }
            successCalback(response.data!)
          }
        }
      })
    })
  }
  if (!SocketIo.getSharedKey()) {
    SocketIo.pushCallback(finalRequest)
  } else if (!SocketIo.getSocket()!.connected) {
    if (!isLoadingHidden) {
      setReduxState("ui", { snackbar: { message: "noInternetConnexionFound", severity: "error" } })
    }
  } else {
    finalRequest()
  }
}
