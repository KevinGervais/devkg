import { PublicFile, RequestContent, RequestData } from "."
import { AllOSTypes, Remove } from ".."

export interface Bug {
  _id: string
  deviceId: string,
  imageIdList: string[]
  operatingSystem: AllOSTypes,
  userAgent: string,
  isCordova: boolean,
  appVersion: string,
  message: string,
  creationDate: string,
}

export type BugRequests = RequestContent<{
  createOne: RequestData<
    Remove<Bug, "creationDate" | "_id" | "imageIdList"> & { imageFileList: PublicFile[] },
    undefined
  >
  getMany: RequestData<
    {},
    Bug[]
  >
  deleteOne: RequestData<
    { _id: string },
    undefined
  >

}>