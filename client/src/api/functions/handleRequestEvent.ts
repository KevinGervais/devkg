import { AllCollections, AllRequests, RequestData, fromAES } from "@/shared"

import { getStorageItem } from "@/localStorage"

import { SocketIo } from "../classes"


export function handleRequestEvent<Collection extends AllCollections, Path extends keyof AllRequests[Collection]>(
  collection: Collection,
  path: Path,
  id: string | undefined,
  callback: (
    data: AllRequests[Collection][Path] extends RequestData<any, any, any>
      ? AllRequests[Collection][Path]["emit"]
      : never
  ) => void,

): void {
  const socket = SocketIo.getSocket()
  if (socket) {
    socket.on<string>(`/api/${collection}/${path as string}${id ? `/${id}` : ""}`, (data: any) => {
      if (id) {
        const secureId = getStorageItem("secureId")
        if (secureId) {
          const finalData = fromAES(data, secureId, () => SocketIo.launch())
          callback(finalData)
        }
      } else {
        callback(data)
      }
    })
  }

}
