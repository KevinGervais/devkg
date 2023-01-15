import { getOrSetStore } from "./getOrSetStore"
import { ReduxState } from "./model"

export function getReduxState(): ReduxState {
  return getOrSetStore().getState() as ReduxState
}
