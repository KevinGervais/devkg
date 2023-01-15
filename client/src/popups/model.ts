import * as popupMap from "./components"
import { LargeMessageProps } from "./components/LargeMessage/model"
import { OKProps } from "./components/Ok/model"
import { SafeActionProps } from "./components/SafeAction/model"

export interface PopupState<PopupName extends AllPopupNames | undefined> {
  name: PopupName
  props: PopupProps<PopupName>
}
export type AllPopupNames = keyof typeof popupMap

type PopupPropsByNameTemplate<Content extends { [key in AllPopupNames]: any }> =
  keyof Content extends AllPopupNames ? Content : keyof Content extends string ? never : never

type PopupPropsByName = PopupPropsByNameTemplate<{
  Ok: OKProps
  SafeAction: SafeActionProps
  EditPassword: undefined
  LargeMessage: LargeMessageProps
  ValidateNewUser: undefined
  ValidateToken: undefined
  BugReport: undefined
}>
export type PopupProps<PopupName extends AllPopupNames | undefined> = PopupName extends AllPopupNames ? PopupPropsByName[PopupName] : undefined
