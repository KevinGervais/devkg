import { SocketParams } from "@/classes/model"
import { throwError } from "@/functions"

export async function updateOneValidateToken({ currentUser, dbQueries, body, send, refreshCurrentUser }: SocketParams<"users", "updateOne">): Promise<void> {
  const {
    token,
  } = body
  if (!currentUser || !currentUser.emailToken) {
    throwError("accessDenied")
  }

  if (!token || currentUser.emailToken.token !== token) {
    throwError("accessDenied")
  }
  await dbQueries.updateOne("users", { _id: currentUser._id }, {
    $unset: { emailToken: 1 },
    $set: { email: currentUser.emailToken.newEmail }
  })
  send(undefined)
  await refreshCurrentUser()
}