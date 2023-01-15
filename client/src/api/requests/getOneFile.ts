import axios, { CancelTokenSource } from "axios"

import { AllFileDataTypes, FileInfo, PublicFile } from "@/shared"

import { handleHttpRequest } from "@/api/functions"
import { setReduxState } from "@/redux"

import { SocketIo } from "../classes"

export function getOneFile<DataType extends AllFileDataTypes>(query: {
  _id: string,
  dataType: DataType,
}, callback: (file: DataType extends "none" ? FileInfo : PublicFile) => void): CancelTokenSource["cancel"] {
  const tokenSource = axios.CancelToken.source()
  handleHttpRequest(
    "files",
    "getOne",
    {
      ...query,
      isLoadingHidden: true,
      socketId: SocketIo.getSocketId()!,
      cancelToken: tokenSource.token
    },
    file => {
      callback(file as DataType extends "none" ? FileInfo : PublicFile)
    }, error => {
      setReduxState("ui", {
        snackbar: {
          message: error,
          severity: "error"
        }
      })
    }
  )
  return tokenSource.cancel
}