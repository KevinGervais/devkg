import { PublicFile, generateId, getFileSize } from "@/shared"

import { blobToBase64 } from "./uploadFile"
// tslint:disable-next-line:no-var-requires
const jpegasus = require("jpegasus")

export async function onFileDrop(
  evt: React.DragEvent<HTMLDivElement>,
  isImage: boolean,
  callback: (file: PublicFile) => void
): Promise<PublicFile> {
  const blob = evt.dataTransfer.files[0]!
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
  callback(file)
  return file
}