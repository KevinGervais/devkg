import { RequestContent, RequestData } from "."



export type SocketRequests = RequestContent<{
  getCurrent: RequestData<
    {},
    undefined,
    { sharedKey: string, socketId: string }
  >
}>