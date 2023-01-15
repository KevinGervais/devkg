import { Dispatch } from "react"
import { AnyAction } from "redux"

import { AllPopupNames, PopupState } from "@/popups/model"
import { ReduxState } from "@/redux/model"

import { getOrSetStore } from "./getOrSetStore"

export function setReduxState<
  Keys extends keyof ReduxState,
  PopupName extends AllPopupNames | undefined,
>(
  ...args: [
    { [key in Keys]: Partial<ReduxState[key]> },
  ] | [
    { [key in Keys]: Partial<ReduxState[key]> },
    undefined
  ]
    | [
    { [key in Keys]: Partial<ReduxState[key]> },
    () => void
  ] | [
    Keys,
    Keys extends "popups" ? Partial<PopupState<PopupName>> : Partial<ReduxState[Keys]>,
  ] | [
    Keys,
    Keys extends "popups" ? Partial<PopupState<PopupName>> : Partial<ReduxState[Keys]>,
    undefined
  ] | [
    Keys,
    Keys extends "popups" ? Partial<PopupState<PopupName>> : Partial<ReduxState[Keys]>,
    () => void
  ]
): void {
  const [arg1, arg2, arg3] = args
  if (typeof arg1 === "string") {
    setStateByKey(arg1, arg2 as any, arg3)
  } else {
    setStateByObject(arg1, arg2 as any)
  }
}
export function setStateByKey<ReducerKey extends keyof ReduxState, PopupName extends AllPopupNames | undefined>(
  reducerKey: ReducerKey,
  data: ReducerKey extends "popups" ? Partial<PopupState<PopupName>> : Partial<ReduxState[ReducerKey]>,
  callback?: () => void
): void {
  const newObject: any = {}

  Object.keys(data).forEach((key: any) => {
    const item = (data as any)[key]
    if (item instanceof Array) {
      newObject[key] = [...item]
    } else if (typeof item === "object" && item !== null && item !== undefined) {
      newObject[key] = { ...item }
    } else {
      newObject[key] = item
    }
  })
  if (callback) {
    const updateState = () => (dispatch: Dispatch<AnyAction>) => {
      dispatch({
        type: `SET_${reducerKey.toUpperCase()}`,
        reducerKey,
        data: newObject
      })
      return Promise.resolve()
    }
    getOrSetStore().dispatch(updateState() as any).then(() => {
      if (callback) {
        callback()
      }
    })
  } else {
    getOrSetStore().dispatch({
      type: `SET_${reducerKey.toUpperCase()}`,
      reducerKey,
      data: newObject
    })
  }
}
export function setStateByObject(
  data: { [key in keyof ReduxState]?: Partial<ReduxState[key]> },
  callback?: () => void
): void {
  const newObject: typeof data = {};
  (Object.keys(data) as (keyof ReduxState)[]).forEach(reduxKey => {
    newObject[reduxKey] = {}
    Object.keys(data[reduxKey]!).forEach(key => {
      const item = (data[reduxKey] as any)[key]
      if (item instanceof Array) {
        (newObject[reduxKey] as any)[key] = [...item]
      } else if (typeof item === "object" && item !== null && item !== undefined) {
        (newObject[reduxKey] as any)[key] = { ...item }
      } else {
        (newObject[reduxKey] as any)[key] = item
      }
    })
  })
  if (callback) {
    const updateState = () => (dispatch: Dispatch<AnyAction>) => {
      dispatch({
        type: "SET",
        data: newObject
      })
      return Promise.resolve()
    }
    getOrSetStore().dispatch(updateState() as any).then(() => {
      if (callback) {
        callback()
      }
    })
  } else {
    getOrSetStore().dispatch({
      type: "SET",
      data: newObject
    })
  }
}