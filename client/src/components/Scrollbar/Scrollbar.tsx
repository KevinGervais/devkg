import Scrollbars, { ScrollbarProps } from "react-custom-scrollbars-2"


export function Scrollbar(props: ScrollbarProps): JSX.Element {
  return (
    <Scrollbars
      className={`${props.className || ""} scrollbar-box`}
      {...props}
      style={{ width: "100%" }}
    >
      {props.children}
    </Scrollbars>
  )
}
