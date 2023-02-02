
import { SocketParams } from "@/classes/model"

export async function deleteOne({ mongodb, currentUser, body, send }: SocketParams<"users", "deleteOne">): Promise<void> {
  await new Promise<undefined>(resolve => resolve(undefined))
  send(undefined)
}
