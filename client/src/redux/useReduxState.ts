import { shallowEqual, useSelector } from "react-redux"

import { ReduxState } from "@/redux/model"

export function useReduxState<Result>(callback: (state: ReduxState) => Result): Result {
  return useSelector(callback, shallowEqual) as Result
}
