import { generateId } from "@/shared"

import { setStorageItem } from "@/localStorage"
import { UIState } from "@/ui/model"

import { SetAction } from "../redux/model"

export const ui = (currentState: UIState, action: SetAction<"ui">) => {
  const data = action.data
  if (data.isShowTermsWarning !== undefined) {
    setStorageItem("isShowTermsWarning", data.isShowTermsWarning)
  }
  if (data.loadingCount !== undefined && data.loadingCount < 0) {
    data.loadingCount = 0
  }
  if (data.snackbar) {
    data.snackbar._id = generateId()
  }
  return {
    ...currentState,
    ...data
  }

}