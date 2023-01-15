import { User, fromAES, toAES } from "shared"

import { SocketParams } from "@/classes/model"
import { sendEmail } from "@/emails/functions/sendEmail"
import { compareCrypted, crypt, throwError } from "@/functions"

export async function updateOnePassword({
  currentUser, body, dbQueries, send, refreshCurrentUser
}: SocketParams<"users", "updateOne">): Promise<void> {
  const { password, oldPassword, language } = body
  if (!currentUser || !password || !oldPassword) {
    throwError("accessDenied")
  }

  const isValidPassword = await compareCrypted(`${currentUser._id}.${oldPassword}`, currentUser.password)
  if (!isValidPassword) {
    throwError("wrongPassword")
  }
  const decryptedSecureId = fromAES(currentUser.secureId, oldPassword, () => throwError("corruptedData"), true)
  const newSecureId = toAES(decryptedSecureId, password)!

  const query: Pick<User, "password" | "_id" | "secureId"> = {
    password: await crypt(`${currentUser._id}.${password}`),
    secureId: newSecureId,
    _id: currentUser._id,

  }

  await dbQueries.updateOne("users", { _id: currentUser._id }, { $set: query })
  send(undefined)
  await refreshCurrentUser()
  await sendEmail(
    currentUser.email,
    language,
    "updateUserPassword",
    { email: currentUser.email }
  )

}