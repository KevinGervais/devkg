import { AllFileDataTypes, Remove, RequestContent, RequestData } from ".."


export interface Base64File {
  _id: string
  name: string
  type: string
  size: number
  data: string
  thumbnailData?: string
}
export type PublicFile = Remove<Base64File, "thumbnailData">
export type FileInfo = Pick<Base64File, "_id" | "name" | "type" | "size">
export type FileRequests = RequestContent<{
  getOne: RequestData<
    Pick<Base64File, "_id"> & { socketId: string, dataType: AllFileDataTypes },
    PublicFile | FileInfo
  >
  getMany: RequestData<
    { socketId: string, idList: string[], dataType: AllFileDataTypes },
    (PublicFile | FileInfo)[]
  >
}>
