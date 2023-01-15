import { Base64File, PublicFile, generateId } from "shared"
import sharp from "sharp"

import { DbQueries } from "@/classes"

import { sequentialAwait } from "."

export async function createManyFiles(
  imageFileList: PublicFile[],
  dbQueries: DbQueries,
): Promise<{ idList: string[], newIdList: string[] }>
export async function createManyFiles(
  imageFileList: PublicFile[],
  dbQueries: DbQueries,
  oldImageIdList: string[]
): Promise<{
  idList: string[],
  newIdList: string[],
  deletedIdList: string[],
}>
export async function createManyFiles<OldIdList>(
  imageFileList: PublicFile[],
  dbQueries: DbQueries,
  oldImageIdList?: OldIdList
): Promise<{
  idList: string[],
  newIdList: string[],
  deletedIdList?: string[],
}> {
  const idList: string[] = []
  const newFileList: Base64File[] = []
  await sequentialAwait(imageFileList, async file => {
    const existingFile = await dbQueries.getOne("files", { _id: file._id }, { projection: { _id: 1, data: 1 } })
    const isIdRecreate = existingFile && existingFile.data !== file.data
    const isAlreadyExists = existingFile && existingFile.data === file.data
    if (isAlreadyExists) {
      idList.push(file._id)
      return
    }
    let finalFile: Base64File = { ...file, _id: generateId() }
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

    newFileList.push(finalFile)
    idList.push(finalFile._id)
  })
  if (newFileList.length) {
    await dbQueries.createMany("files", newFileList)
  }
  const newIdList = newFileList.map(item => item._id)

  return {
    idList,
    newIdList,
    deletedIdList: oldImageIdList ? (oldImageIdList as unknown as string[]).filter(_id => !idList.includes(_id)) : undefined
  }
}

