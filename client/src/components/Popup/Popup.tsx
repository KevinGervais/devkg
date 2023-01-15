import { LargePopup } from "./LargePopup"
import { SmallPopup } from "./SmallPopup"
import { PopupProps } from "./model"

export function Popup(props: PopupProps): JSX.Element {
  if (props.isLarge) {
    return <LargePopup {...props} />
  } else {
    return <SmallPopup {...props} />
  }
}