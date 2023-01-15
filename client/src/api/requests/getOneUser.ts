import { UserRequests } from "@/shared"

import { handleSocketRequest } from "@/api/functions"


export function getOneUser(
  _id: string,
  callback: (user: UserRequests["getOne"]["result"]
  ) => void
): void {
  handleSocketRequest(
    "users",
    "getOne",
    {
      _id,
    },
    user => {
      callback(user)
    }
  )
}