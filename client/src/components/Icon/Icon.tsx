import { icons } from "@/icons"

import { IconFn, IconProps } from "./model"

export function Icon(props: IconProps): JSX.Element | never {
  const { type = "light", name, onClick, className, svgProps } = props
  const Svg: IconFn = icons[`fa${type.charAt(0)}-${name}`]
  if (Svg) {
    return (
      <div
        onClick={onClick}
        className={`fa-icon shrink-0 ${onClick ? "clickable" : ""} fa${type.charAt(0)}-${name} ${className || ""}`}
      >
        <Svg {...svgProps} className="h-full" />
        {props.children}
      </div>
    )
  } else {
    window.alert(`node node_modules/font-awesome/add.js fa${type.charAt(0)}-${name}`)
    return (
      <div />
    )
  }
}
