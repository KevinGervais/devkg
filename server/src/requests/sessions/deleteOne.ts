import { SocketParams } from "@/classes/model"
export async function deleteOne({ dbQueries, currentUser, deleteSession, body, send }: SocketParams<"sessions", "deleteOne">): Promise<void> {
  const { deviceId } = body
  await dbQueries.deleteMany("sessions", { deviceId })
  send(undefined)
  currentUser = undefined
  deleteSession()
}
