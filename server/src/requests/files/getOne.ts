import { HTTPRequestHandler } from "@/classes"
import { simplifyQuery, throwError } from "@/functions"

export function getOne(handleRequest: HTTPRequestHandler["handleRequest"]): void {
  handleRequest("files", "getOne", async ({ mongodb, currentUser, body, send }) => {
    const {
      _id,
      dataType,
    } = body

    const query = simplifyQuery({
      _id
    })

    const file = await mongodb.getOne("files", query, {
      projection: {
        thumbnailData: dataType !== "small" ? 0 : undefined,
        data: dataType !== "original" ? 0 : undefined,
      }
    })
    if (file) {
      if (dataType === "small") {
        file.data = file.thumbnailData!
      }
      send(file)
    } else {
      throwError("dataDoesntExists")
    }
  })
}

