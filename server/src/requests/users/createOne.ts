import dayjs from "dayjs"
import { User, generateId, toAES } from "shared"

import { SocketParams } from "@/classes/model"
import { validateEmail } from "@/emails/functions"
import { sendEmail } from "@/emails/functions/sendEmail"
import { crypt, simplifyQuery, throwError } from "@/functions"

const tokenByEmail: { [email: string]: string | undefined } = {}

export async function createOne({ mongodb, body, socket, createSession, send }: SocketParams<"users", "createOne">): Promise<void> {
  const {
    firstName,
    lastName,
    password,
    email,
    language,
    token,
    deviceId
  } = body
  if (firstName === "deleted" || lastName === "user") {
    throwError("accessDenied")
  }
  const decryptedSecureId = generateId()
  const userId = generateId()
  const query = simplifyQuery<User>({
    _id: userId,
    password: await crypt(`${userId}.${password}`),
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    email,
    role: "standard",
    creationDate: dayjs().toISOString(),
    secureId: toAES(decryptedSecureId, password)!,
    secureIdVerif: await crypt(decryptedSecureId),
  })

  validateEmail(query.email)
  const existingUser = await mongodb.getOne("users", { email })

  if (existingUser) {
    throwError("userAlreadyExists")
  }
  if (token) {
    if (tokenByEmail[query.email] !== token) {
      throwError("wrongToken")
    }
    const userAgent = socket.request.headers["user-agent"]!
    const _id = await mongodb.createOne("users", query)
    await sendEmail(
      email,
      language,
      "createUser",
      {
        firstName: query.firstName,
        email: query.email,
      }
    )
    const { password: p, emailToken, secureId, secureIdVerif, ...finalUser } = query
    createSession({ ...query, _id }, decryptedSecureId)
    const sessionId = await mongodb.createOne("sessions", {
      userId: _id,
      deviceId,
      creationDate: dayjs().toISOString(),
      userAgent
    })
    const newSessionId = await crypt(sessionId)
    send({
      user: { ...finalUser, _id },
      sessionId: newSessionId,
      secureId: decryptedSecureId
    })
  } else {
    const newToken = generateId(5, true)
    await sendEmail(email, language, "verifyEmail", {
      email: query.email,
      token: newToken
    })
    tokenByEmail[query.email] = newToken
    setTimeout(() => {
      tokenByEmail[query.email] = undefined
    }, 1000 * 60 * 15)
    send(undefined)
  }
}