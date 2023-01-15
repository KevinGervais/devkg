import * as shared from "shared"

import { ServerState, SocketState } from "@/model"
import { handleSocketRequests } from "@/requests"

import { emitCurrentUser, log, nullToUndefined, throwError, validate } from "../functions"
import { SocketParams } from "./model"

export class SocketRequestHandler {
  public static serverState: ServerState
  public socketState: SocketState
  private static cryptFnByUserId: { [userId: string]: ((data: any) => string | undefined) | undefined } = {}
  constructor(initSocketState: shared.Remove<SocketState, "refreshCurrentUser" | "publicKey" | "sharedKey" | "socketId">) {
    log("user connected", "info")
    const publicKey = (initSocketState.socket.handshake.query as unknown as shared.SocketQuery).publicKey
    const sharedKey = shared.getAESKey()
    this.handleRequest = this.handleRequest.bind(this)
    this.createSession = this.createSession.bind(this)
    this.deleteSession = this.deleteSession.bind(this)
    this.refreshCurrentUser = this.refreshCurrentUser.bind(this)
    this.socketState = {
      ...initSocketState,
      refreshCurrentUser: this.refreshCurrentUser,
      sharedKey,
      publicKey,
      socketId: shared.getAESKey(true),
    }

    this.socketState.socket.onAny(url => log(url, "info"))
    const emitStocketData: shared.SocketRequests["getCurrent"]["emit"] = {
      sharedKey: shared.toRSA(this.socketState.sharedKey, this.socketState.publicKey),
      socketId: this.socketState.socketId
    }
    this.socketState.socket.emit("/api/sockets/getCurrent", emitStocketData)
    handleSocketRequests(this.handleRequest)
    this.socketState.socket.on("disconnect", () => {
      log("user disconnected", "info")
      this.deleteSession()
    })
  }

  public createSession(newCurrentUser: shared.User, secureId: string): void {
    log("logged in", "info")
    const { currentUserBySocketId } = SocketRequestHandler.serverState
    const { socketId } = this.socketState
    currentUserBySocketId[socketId] = newCurrentUser
    this.socketState.currentUser = newCurrentUser
    SocketRequestHandler.cryptFnByUserId[newCurrentUser._id] = data => shared.toAES(data, secureId)
  }

  public deleteSession(): void {
    const { currentUserBySocketId } = SocketRequestHandler.serverState
    const { socketId, currentUser } = this.socketState
    if (currentUser) {
      log("logged out", "info")
      currentUserBySocketId[socketId] = undefined
      SocketRequestHandler.cryptFnByUserId[currentUser._id] = undefined
    }
    this.socketState.currentUser = undefined
  }
  public handleRequest<
    Collection extends shared.AllCollections,
    Path extends keyof shared.AllRequests[Collection],
  >(
    collection: Collection,
    path: Path,
    callback: (params: SocketParams<Collection, Path>) => Promise<any>
  ): void {
    const { socket } = this.socketState
    const { io } = SocketRequestHandler.serverState
    socket.on(`/api/${collection}/${path as string}`,
      // @ts-ignore
      async (
        body: shared.PublicRequestData,
        response
      ) => {
        try {
          const contentObj = shared.fromAES(body.content, this.socketState.sharedKey, () => throwError("tryAgain"))
          const finalBody = nullToUndefined(body.data ? { ...contentObj, ...body.data } : contentObj)
          validate(collection, path, finalBody)

          if (shared.LANGUAGE_LIST.includes(finalBody.language) && this.socketState.currentUser && !this.socketState.currentUser.language) {
            await SocketRequestHandler.serverState.dbQueries.updateOne("users", {
              _id: this.socketState.currentUser._id
            }, {
              $set: { language: finalBody.language }
            })
          }

          await callback({
            body: finalBody || {},
            send: (data, isDecrypted) => {
              if (isDecrypted) {
                response({ data })
              } else {
                const crypted = shared.toAES(data, this.socketState.sharedKey)
                response({ crypted })
              }
            },
            emit: (id, data) => {
              if (id && SocketRequestHandler.cryptFnByUserId[id]) {
                log(`/api/${collection}/${path as string}/${id}`, "info")
                const finalData = SocketRequestHandler.cryptFnByUserId[id]!(data)
                io.emit(`/api/${collection}/${path as string}/${id}`, finalData)
              } else {
                log(`/api/${collection}/${path as string}${id ? `/${id}` : ""}`, "info")
                io.emit(`/api/${collection}/${path as string}${id ? `/${id}` : ""}`, data)
              }
            },
            ...this.socketState,
            ...SocketRequestHandler.serverState,
            createSession: this.createSession,
            deleteSession: this.deleteSession
          })
        } catch (err: any) {
          log(err.message, "error")
          response({ error: err.message })
        }
      })
  }
  private async refreshCurrentUser(): Promise<void> {
    if (this.socketState.currentUser) {
      const user = await SocketRequestHandler.serverState.dbQueries.getOne("users", {
        _id: this.socketState.currentUser._id
      })
      if (user) {
        this.socketState.currentUser = user
        emitCurrentUser({
          ...this.socketState,
          cryptFn: SocketRequestHandler.cryptFnByUserId[this.socketState.currentUser._id]!
        })
      }
    }
  }
}