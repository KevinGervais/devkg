
import { SocketParams } from "@/classes/model"
import { throwError } from "@/functions"

export async function getMany({ currentUser, dbQueries, send }: SocketParams<"users", "getMany">): Promise<void> {
  if (!currentUser || currentUser.role !== "admin") {
    throwError("accessDenied")
  }
  const allUsers = await dbQueries.getMany("users", {}, { projection: { password: 0 } })
  send(allUsers)
}