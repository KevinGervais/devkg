import { PublicFile } from "@/shared"

import { onFileChange } from "./uploadFile"

export interface NumberMap {
  [number: string]: boolean
}

export interface ObjectWithId {
  [key: string]: any
  _id: string
}


export interface UploadFileThis {
  onFileChange: typeof onFileChange,
  fileElement: HTMLInputElement
  callback: (file: PublicFile[]) => void
}

