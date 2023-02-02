import dayjs from "dayjs"
import { Bug, Remove } from "shared"

import { SocketParams } from "@/classes/model"
import { createManyFiles } from "@/functions"

import json from "../../../package.json"

export async function createOne({ mongodb, body, send }: SocketParams<"bugs", "createOne">): Promise<void> {
  const {
    deviceId,
    operatingSystem,
    isCordova,
    userAgent,
    appVersion,
    message,
    imageFileList
  } = body

  const query: Remove<Bug, "_id"> = {
    deviceId,
    operatingSystem,
    isCordova,
    userAgent,
    appVersion,
    creationDate: dayjs().toISOString(),
    imageIdList: [],
    message,
  }
  if (query.appVersion === "appVersion9yr7xnjuwc") {
    query.appVersion = json.version
  }
  if (imageFileList.length) {
    query.imageIdList = (await (createManyFiles(imageFileList, mongodb))).idList
  }
  await mongodb.createOne("bugs", {
    ...query,
    creationDate: dayjs().toISOString()
  })
  send(undefined)
}