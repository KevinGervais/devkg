import { SocketParams } from "@/classes/model"
import { paramsToProjection, throwError } from "@/functions"


export async function deleteOne({ mongodb, body, currentUser, send }: SocketParams<"bugs", "deleteOne">): Promise<void> {
  const { _id } = body
  if (!currentUser || currentUser.role !== "admin") {
    throwError("accessDenied")
  }
  const bugItem = await mongodb.getOne("bugs", { _id }, paramsToProjection(["imageIdList"]))
  if (bugItem) {
    await mongodb.deleteOne("bugs", { _id })
    await mongodb.deleteMany("files", { _id: { $in: bugItem.imageIdList } })
    send(undefined)
  } else {
    throwError("dataDoesntExists")
  }
}