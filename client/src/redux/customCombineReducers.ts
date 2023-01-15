
import { GlobalSetAction, ReduxState, ResetAction, SetAction } from "./model"

export function customCombineReducers(reducers: {
  [reducerKey in keyof ReduxState]: (
    currentState: ReduxState[reducerKey],
    action: SetAction<reducerKey>,
    reduxState?: ReduxState
  ) => ReduxState[reducerKey]
},
  oldState: ReduxState,
  action: SetAction<keyof ReduxState> | ResetAction | GlobalSetAction,
): ReduxState {
  const resetAction = action as ResetAction
  const setAction = action as SetAction<keyof ReduxState>
  const globalAction = action as GlobalSetAction

  if (resetAction.type === "RESET_ALL_STATE") {
    return { ...resetAction.data }
  } else if (globalAction.type === "SET") {
    const stateKeyList = Object.keys(oldState) as (keyof ReduxState)[]
    stateKeyList.forEach(reducerKey => {
      if (globalAction.data[reducerKey]) {
        const innerSetAction: SetAction<keyof ReduxState> = {
          type: `SET_${reducerKey.toUpperCase() as Uppercase<typeof reducerKey>}` as const,
          reducerKey,
          data: globalAction.data[reducerKey]

        }
        oldState[reducerKey] = (reducers as any)[reducerKey](oldState[reducerKey], innerSetAction, oldState)
      } else {
        (oldState as any)[reducerKey] = { ...oldState[reducerKey] }
      }
    })

    return { ...oldState }
  } else if (setAction.type.startsWith("SET")) {
    const stateKeyList = Object.keys(oldState) as (keyof ReduxState)[]
    stateKeyList.forEach(reducerKey => {
      if (setAction.reducerKey !== reducerKey) {
        (oldState as any)[reducerKey] = { ...oldState[reducerKey] }
      } else {
        oldState[reducerKey] = (reducers as any)[reducerKey](oldState[reducerKey], setAction, oldState)
      }
    })
    return { ...oldState }
  } else {
    return { ...oldState }
  }
}