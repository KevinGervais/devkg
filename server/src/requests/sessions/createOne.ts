import dayjs from "dayjs"
import { fromAES } from "shared"

import { SocketParams } from "@/classes/model"
import { validateEmail } from "@/emails/functions"
import { compareCrypted, crypt, getCurrentUser, simplifyQuery, throwError } from "@/functions"

export async function createOne({ body, socket, createSession, mongodb, send }: SocketParams<"sessions", "createOne">): Promise<void> {
  const {
    email,
    password,
    sessionId,
    deviceId,
    secureId,
    userId,
    notificationRegistrationId
  } = body
  if (sessionId || userId) {
    const currentUser = await getCurrentUser({ socket, mongodb, sessionId, userId, notificationRegistrationId })

    if (currentUser) {
      if (!secureId) {
        throwError("accessDenied")
      }
      const isValidSecureId = await compareCrypted(secureId, currentUser.secureIdVerif)

      if (!isValidSecureId) {
        throwError("accessDenied")
      }

      createSession(currentUser, secureId)
      send({
        user: {
          ...simplifyQuery(currentUser, ["password", "emailToken"]),
          isEmailToken: !!currentUser.emailToken
        },
      })
    } else {
      throwError("accessDenied")
    }
    return
  }
  const userAgent = socket.request.headers["user-agent"]
  validateEmail(email || "")

  if (userAgent === undefined || password === undefined || deviceId === undefined) {
    throwError("accessDenied")
  }

  const user = await mongodb.getOne("users", { email })
  if (!user) {
    throwError("userDoesntExists")
  }
  const isValidPassword = await compareCrypted(`${user._id}.${password}`, user.password)
  if (!isValidPassword) {
    throwError("wrongPassword")
  }
  const decryptedSecureId = fromAES(user.secureId, password, () => throwError("corruptedData"), true)
  const _id = await mongodb.createOne("sessions", {
    userId: user._id,
    userAgent,
    deviceId,
    notificationRegistrationId,
    creationDate: dayjs().toISOString()
  })
  const newSessionId = await crypt(_id)
  createSession(user, decryptedSecureId)
  send({
    user: { ...simplifyQuery(user, ["password", "emailToken"]), isEmailToken: !!user.emailToken },
    sessionId: newSessionId,
    secureId: decryptedSecureId
  })
}