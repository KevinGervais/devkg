import { EmailToken, generateId } from "shared"

import { SocketParams } from "@/classes/model"
import { validateEmail } from "@/emails/functions"
import { sendEmail } from "@/emails/functions/sendEmail"
import { throwError } from "@/functions"

export async function updateOneEmail({ currentUser, body, dbQueries, send, refreshCurrentUser }: SocketParams<"users", "updateOne">): Promise<void> {
  const { email, language } = body
  if (!email || !currentUser || currentUser.email === email) {
    throwError("accessDenied")
  }
  validateEmail(email)

  const emailToken: EmailToken = {
    token: generateId(5, true),
    oldEmail: currentUser.email,
    newEmail: email
  }
  const foundEmailUser = await dbQueries.getOne("users", { email })
  if (foundEmailUser) {
    throwError("userAlreadyExists")
  }
  await dbQueries.updateOne("users", { _id: currentUser._id }, { $set: { emailToken } })
  send(undefined)
  await refreshCurrentUser()
  await sendEmail(
    email,
    language,
    "updateUserEmail",
    {
      email,
      oldEmail: currentUser.email,
      token: emailToken.token
    }
  )
}