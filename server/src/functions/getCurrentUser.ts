import { Session, SessionRequests, User } from "shared"

import { ServerState, SocketState } from "@/model"

import { compareCrypted } from "./compareCrypted"
export async function getCurrentUser(
  {
    sessionId,
    userId,
    dbQueries,
    socket,
    notificationRegistrationId
  }: Pick<ServerState, "dbQueries"> & Pick<SocketState, "socket"> & SessionRequests["createOne"]["params"]
): Promise<User | undefined> {
  try {
    const userAgent = socket.request.headers["user-agent"]
    if (!sessionId || !userId || !userAgent) {
      return undefined
    }
    const sessionList = await dbQueries.getMany("sessions", { userId })
    let foundSession: Session | undefined
    await Promise.all(sessionList.map(async item => {
      const isSame = await compareCrypted(item._id, sessionId)
      if (isSame) {
        foundSession = item
      }
      return item
    }))
    if (!foundSession) {
      return undefined
    }

    if (foundSession.userAgent !== userAgent) {
      await dbQueries.deleteOne("sessions", { _id: foundSession._id, userId: foundSession.userId })
      return undefined
    }
    if (foundSession.notificationRegistrationId !== notificationRegistrationId) {

      await dbQueries.updateOne("sessions", { _id: foundSession._id }, {
        $set: {
          notificationRegistrationId
        }
      })
    }

    return await dbQueries.getOne("users", { _id: foundSession.userId })

  } catch (err) {
    return undefined
  }
}
