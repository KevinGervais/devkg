import { getReduxState } from "@/redux"

import { SocketIo } from "../classes"
import { createOneSession } from "../requests"


export function getCurrentSocketEvent(): void {
  SocketIo.getSocket()!.on("/api/sockets/getCurrent", ({ sharedKey, socketId }: {
    sharedKey: string,
    socketId: string
  }) => {
    SocketIo.setSharedKey(sharedKey)
    SocketIo.setSocketId(socketId)
    if (getReduxState().users.currentUser) {
      createOneSession({})
    } else {
      SocketIo.launchCallbackArray()
    }
  })
}