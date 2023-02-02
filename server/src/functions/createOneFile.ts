import { Base64File, PublicFile, generateId } from "shared"
import sharp from "sharp"

import { Mongodb } from "@/classes"

export async function createOneFile(
  file: PublicFile,
  mongodb: Mongodb
): Promise<string> {
  const existingFile = await mongodb.getOne("files", { _id: file._id }, { projection: { _id: 1, data: 1 } })
  const isIdRecreate = existingFile && existingFile.data !== file.data
  const isAlreadyExists = existingFile && existingFile.data === file.data
  if (isAlreadyExists) {
    return file._id
  }
  let finalFile: Base64File = file
  if (file.type.startsWith("image")) {
    const parts = file.data.split(";")
    const mimType = parts[0]!.split(":")[1]
    const imageData = parts[1]!.split(",")[1]!
    const img = Buffer.from(imageData, "base64")
    const buffer = await sharp(img).resize(300, 300 * 0.7, { fit: "cover" }).toBuffer()
    const resizedImageData = buffer.toString("base64")
    const resizedBase64 = `data:${mimType};base64,${resizedImageData}`
    finalFile = {
      ...file,
      _id: isIdRecreate ? generateId() : file._id,
      thumbnailData: resizedBase64
    }
  }
  return await mongodb.createOne("files", finalFile)
}