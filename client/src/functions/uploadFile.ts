import { PublicFile, generateId, getFileSize } from "@/shared"

import { DOCX_AND_PDF_ACCEPT } from "@/constants"
import { getReduxState, setReduxState } from "@/redux"

import { UploadFileThis } from "./model"
// tslint:disable-next-line:no-var-requires
const jpegasus = require("jpegasus")
export const uploadFile = uploadFileNotBinded.bind({} as any)
export function uploadFileNotBinded(
  this: UploadFileThis,
  type: "image/*" | "application/pdf" | "file" | typeof DOCX_AND_PDF_ACCEPT,
  isMultiple: boolean,
  callback: (file: PublicFile[]) => void
): void {
  const fileElement = document.createElement("input")
  fileElement.setAttribute("type", "file")
  fileElement.setAttribute("accept", type)

  if (isMultiple) {
    fileElement.setAttribute("multiple", "multiple")
  }

  fileElement.click()
  this.fileElement = fileElement
  this.onFileChange = onFileChange.bind(this)
  this.callback = callback
  fileElement.addEventListener("change", this.onFileChange)
}

export async function onFileChange(this: UploadFileThis, evt: any): Promise<void> {
  setReduxState("ui", { loadingCount: getReduxState().ui.loadingCount + 1 })
  const blobList: File[] = Object.values((evt.path || evt.composedPath())[0].files)
  const fileList = await Promise.all(blobList.map(async blob => {
    const isImage = this.fileElement.getAttribute("accept")?.startsWith("image")
    const finalBlob = isImage ? await jpegasus.compress(blob, {
      maxHeight: 750,
      maxWidth: 750,
      returnOriginalIfCompressedFileIsLarger: true,
      fixImageOrientation: false,
      quality: 0.65
    }) : blob

    const data = await blobToBase64(finalBlob)
    const { name, type } = finalBlob as any
    const file: PublicFile = { _id: generateId(), name, type, size: getFileSize(data), data }
    return file
  }))
  this.callback(fileList)
  setReduxState("ui", { loadingCount: getReduxState().ui.loadingCount - 1 })
  this.fileElement.removeEventListener("change", onFileChange)
}

export function blobToBase64(file: Blob): Promise<string> {
  const reader = new window.FileReader()
  reader.readAsDataURL(file)

  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort()
      reject(new Error("error on file upload"))
    }
    reader.onload = () => {
      resolve(reader.result as string)
    }
  })
}