import { SocketParams } from "@/classes/model"
import { throwError } from "@/functions"


export async function getMany({ mongodb, currentUser, send }: SocketParams<"bugs", "getMany">): Promise<void> {
  if (!currentUser || currentUser.role !== "admin") {
    throwError("accessDenied")
  }
  const bugList = await mongodb.getMany("bugs", {})
  send(bugList)
}