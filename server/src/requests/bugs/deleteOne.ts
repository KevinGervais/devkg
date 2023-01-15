import { SocketParams } from "@/classes/model"
import { paramsToProjection, throwError } from "@/functions"


export async function deleteOne({ dbQueries, body, currentUser, send }: SocketParams<"bugs", "deleteOne">): Promise<void> {
  const { _id } = body
  if (!currentUser || currentUser.role !== "admin") {
    throwError("accessDenied")
  }
  const bugItem = await dbQueries.getOne("bugs", { _id }, paramsToProjection(["imageIdList"]))
  if (bugItem) {
    await dbQueries.deleteOne("bugs", { _id })
    await dbQueries.deleteMany("files", { _id: { $in: bugItem.imageIdList } })
    send(undefined)
  } else {
    throwError("dataDoesntExists")
  }
}