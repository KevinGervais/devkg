import { SetAction } from "@/redux/model"

import { State } from "./model"

export const  = (currentState: State, action: SetAction<"">) => {
  const data = { ...action.data }

  return {
    ...currentState,
    ...data
  }
}
