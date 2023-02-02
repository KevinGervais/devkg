import { SocketParams } from "@/classes/model"
export async function deleteOne({ mongodb, currentUser, deleteSession, body, send }: SocketParams<"sessions", "deleteOne">): Promise<void> {
  const { deviceId } = body
  await mongodb.deleteMany("sessions", { deviceId })
  send(undefined)
  currentUser = undefined
  deleteSession()
}
