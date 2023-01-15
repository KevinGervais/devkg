import { SocketParams } from "@/classes/model"
import { throwError } from "@/functions"

export async function getOne({ dbQueries, body, currentUser, send }: SocketParams<"users", "getOne">): Promise<void> {
  const {
    _id,
  } = body

  const user = await dbQueries.getOne("users", { _id })

  if (!user) {
    throwError("dataDoesntExists")
  }

  if (currentUser?.role === "admin") {
    const { password, role, creationDate, ...finalUser } = user
    send(finalUser)
  } else {
    const { password, email, phone, role, creationDate, ...finalUser } = user
    send(finalUser)
  }
}