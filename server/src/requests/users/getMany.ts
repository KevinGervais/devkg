
import { SocketParams } from "@/classes/model"
import { throwError } from "@/functions"

export async function getMany({ currentUser, mongodb, send }: SocketParams<"users", "getMany">): Promise<void> {
  if (!currentUser || currentUser.role !== "admin") {
    throwError("accessDenied")
  }
  const allUsers = await mongodb.getMany("users", {}, { projection: { password: 0 } })
  send(allUsers)
}