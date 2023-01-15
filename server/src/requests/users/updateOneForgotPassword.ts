import { User, generateId, toAES } from "shared"

import { SocketParams } from "@/classes/model"
import { sendEmail } from "@/emails/functions/sendEmail"
import { crypt, throwError } from "@/functions"

export async function updateOneForgotPassword({ currentUser, body, dbQueries, send }: SocketParams<"users", "updateOne">): Promise<void> {
  const { forgotPasswordEmail, language } = body
  if (currentUser || !forgotPasswordEmail) {
    throwError("accessDenied")
  }


  const user = await dbQueries.getOne("users", { email: forgotPasswordEmail })
  if (!user) {
    throwError("userDoesntExists")
  }

  const decryptedSecureId = generateId()
  const password = generateId(8)
  const cryptedPassword = await crypt(`${user._id}.${password}`)
  const query: Pick<User, "password" | "secureId" | "secureIdVerif"> = {
    password: cryptedPassword,
    secureId: password ? toAES(decryptedSecureId, password)! : "",
    secureIdVerif: await crypt(decryptedSecureId),
  }

  await dbQueries.updateOne("users", { email: user.email }, { $set: query })
  await dbQueries.deleteMany("sessions", { userId: user._id })
  send(undefined)
  await sendEmail(
    user.email,
    language,
    "resetUserPassword",
    {
      email: user.email,
      password
    }
  )
}