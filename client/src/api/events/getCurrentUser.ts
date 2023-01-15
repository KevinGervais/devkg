import { handleRequestEvent } from "@/api/functions"
import { getReduxState, setReduxState } from "@/redux"


export function getCurrentUserEvent(): void {
  handleRequestEvent("users", "getCurrent", getReduxState().users.currentUser?._id, user => {
    setReduxState("users", { currentUser: user })
  })
}