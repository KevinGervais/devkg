import { PopupState } from "../model"

export function getPopupsInitState(): PopupState<undefined> {
  return {
    name: undefined,
    props: undefined,
  }
}
