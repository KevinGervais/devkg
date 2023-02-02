import { SocketParams } from "@/classes/model"
import { throwError } from "@/functions"

export async function updateOneCancelToken({ currentUser, mongodb, send, refreshCurrentUser }: SocketParams<"users", "updateOne">): Promise<void> {
  if (!currentUser || !currentUser.emailToken) {
    throwError("accessDenied")
  }
  await mongodb.updateOne("users", { _id: currentUser._id }, { $unset: { emailToken: 1 } })
  send(undefined)
  await refreshCurrentUser()
}