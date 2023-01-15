import { UserRequests } from "shared"

import { SocketState } from "@/model"

export function emitCurrentUser(
  { currentUser, socket, cryptFn }: SocketState
    & { cryptFn: ((data: any) => string | undefined) }
): void {
  let currentUserParams: UserRequests["getCurrent"]["emit"]
  if (currentUser) {
    const { password, emailToken, ...user } = currentUser
    currentUserParams = {
      ...user,
      isEmailToken: !!emailToken
    }
  }
  const finalData = cryptFn(currentUserParams)
  socket.emit(`/api/users/getCurrent/${currentUser?._id}`, finalData)
}