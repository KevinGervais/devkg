import { AnyAction, Dispatch } from "redux"

import { ReduxState, ResetAction } from "@/redux/model"

import { getOrSetStore, getReduxInitState } from "."

export function resetReduxState(
  ...args: [
  ] | [
    () => void
  ] | [
    ReduxState,
  ] | [
    ReduxState,
    () => void
  ]
): void {
  const [arg1, arg2] = args
  const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : undefined
  const newState = typeof arg1 === "object" ? arg1 : getReduxInitState()
  const action: ResetAction = {
    type: "RESET_ALL_STATE",
    data: newState
  }
  if (callback) {
    const updateState = () => (dispatch: Dispatch<AnyAction>) => {
      dispatch(action)
      return Promise.resolve()
    }
    getOrSetStore().dispatch(updateState() as any).then(() => {
      if (callback) {
        callback()
      }
    })
  } else {
    getOrSetStore().dispatch(action)
  }
}
