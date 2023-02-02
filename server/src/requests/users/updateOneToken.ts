import { generateId } from "shared"

import { SocketParams } from "@/classes/model"
import { sendEmail } from "@/emails/functions/sendEmail"
import { throwError } from "@/functions"

export async function updateOneToken({ currentUser, body, mongodb, send, refreshCurrentUser }: SocketParams<"users", "updateOne">): Promise<void> {
  const { language } = body
  if (!currentUser || !currentUser.emailToken) {
    throwError("accessDenied")
  }
  const newToken = generateId(5, true)
  await mongodb.updateOne("users", { _id: currentUser._id }, {
    $set: {
      "emailToken.token": newToken,
    }
  })
  send(undefined)
  await refreshCurrentUser()
  await sendEmail(
    currentUser.emailToken.newEmail,
    language,
    "updateUserEmail",
    {
      email: currentUser.emailToken.newEmail,
      oldEmail: currentUser.emailToken.oldEmail,
      token: newToken!
    }
  )
  return
}