import { AllCollections, AllRequests, LONG_ID_LENGTH, Remove, RequestData, User } from "shared"

import { ServerState } from "@/model"
import { handleHttpRequests } from "@/requests"

import { log, nullToUndefined, throwError, validate } from "../functions"

export class HTTPRequestHandler {
  public static serverState: ServerState

  constructor() {
    this.handleRequest = this.handleRequest.bind(this)
    handleHttpRequests(this.handleRequest)
  }
  handleRequest<
    Collection extends AllCollections,
    Path extends keyof AllRequests[Collection]
  >(
    collection: Collection,
    path: Path,
    callback: (
      params: {
        body: AllRequests[Collection][Path] extends RequestData<any, any> ? AllRequests[Collection][Path]["params"] : never,
        send: (data: AllRequests[Collection][Path] extends RequestData<any, any> ? AllRequests[Collection][Path]["result"] : never) => void,
        currentUser: User | undefined
      } & Remove<ServerState, "currentUserBySocketId">) => Promise<any>
  ): void {
    HTTPRequestHandler.serverState.app.post(`/api/${collection}/${path as string}`, async (req: any, res: any): Promise<void> => {
      log(`/api/${collection}/${path as string}`, "info")
      try {
        if (req.body.socketId) {
          if (typeof req.body.socketId !== "string" || req.body.socketId.length !== LONG_ID_LENGTH) {
            throwError("accessDenied")
          }
        }
        const { currentUserBySocketId, ...reducedServerState } = HTTPRequestHandler.serverState
        const body = nullToUndefined(req.body)
        validate(collection, path, body)
        await callback({
          body: req.body,
          send: data => res.send(data),
          currentUser: req.body.socketId ? HTTPRequestHandler.serverState.currentUserBySocketId[req.body.socketId] : undefined,
          ...reducedServerState
        })
      } catch (err: any) {
        res.status(400).send(err.message)
        log(err.message, "error")
      }
    })
  }
}
