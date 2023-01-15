import axios, { CancelTokenSource } from "axios"

import { AllFileDataTypes, FileInfo, PublicFile } from "@/shared"

import { handleHttpRequest } from "@/api/functions"
import { setReduxState } from "@/redux"

import { SocketIo } from "../classes"

export function getManyFiles<DataType extends AllFileDataTypes>(
  {
    idList,
    dataType,
  }: {
    idList: string[],
    dataType: DataType
  },
  callback: (fileList: DataType extends "none" ? FileInfo[] : PublicFile[]) => void
): CancelTokenSource["cancel"] {
  const tokenSource = axios.CancelToken.source()
  handleHttpRequest(
    "files",
    "getMany",
    {
      idList,
      dataType,
      socketId: SocketIo.getSocketId()!,
      isLoadingHidden: true,
      cancelToken: tokenSource.token
    },
    fileList => {
      callback(fileList as DataType extends "none" ? FileInfo[] : PublicFile[])
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