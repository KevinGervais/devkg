import { SocketParams } from "@/classes/model"
import { throwError } from "@/functions"


export async function getMany({ dbQueries, currentUser, send }: SocketParams<"bugs", "getMany">): Promise<void> {
  if (!currentUser || currentUser.role !== "admin") {
    throwError("accessDenied")
  }
  const bugList = await dbQueries.getMany("bugs", {})
  send(bugList)
}