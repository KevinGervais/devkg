import { listToMap } from "shared"

import { HTTPRequestHandler } from "@/classes"
import { simplifyQuery, throwError } from "@/functions"

export function getMany(handleRequest: HTTPRequestHandler["handleRequest"]): void {
  handleRequest("files", "getMany", async ({ dbQueries, currentUser, body, send }) => {
    const {
      idList,
      dataType,
    } = body

    const query = simplifyQuery({
      _id: { $in: idList }
    })

    const fileList = await dbQueries.getMany("files", query, {
      projection: {
        thumbnailData: dataType !== "small" ? 0 : undefined,
        data: dataType !== "original" ? 0 : undefined,
      }
    })

    const fileMap = listToMap(fileList)
    const finalFileList = idList.map(_id => {
      const file = fileMap[_id]
      if (!file) {
        throwError("dataDoesntExists")
      } else {
        if (dataType === "small") {
          file.data = file.thumbnailData!
        }
        return file
      }
    })
    const finalFileMap = listToMap(finalFileList)
    send(idList.map(_id => finalFileMap[_id]!))
  })
}

