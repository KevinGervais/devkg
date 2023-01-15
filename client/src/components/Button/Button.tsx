
import { Bubble } from "../Bubble"
import { Icon } from "../Icon"
import { buttonTw } from "./buttonTw"
import { ButtonProps } from "./model"

export function Button({ ...props }: ButtonProps): JSX.Element {
  if (props.isDisabled) {
    props.color = "grey"
    props.variant = "contained"
    props.shade = 100
  }
  if (!props.variant) {
    props.variant = "contained"
  }
  if (!props.color) {
    props.color = "primary"
  }
  if (!props.size) {
    props.size = "md"
  }
  if (!props.shade) {
    props.shade = props.variant === "contained" ? props.color === "secondary" ? 800 : 500 : 500
  }
  if (!props.iconPosition) {
    props.iconPosition = "left"
  }
  const {
    isDisabled,
    variant,
    color,
    size,
    shade,
    onClick,
    children,
    iconPosition,
    iconName,
    iconType,
    isCircle,
    isReadonly,
  } = props
  const isAnimation = !isDisabled && !isReadonly
  const colorClass = isDisabled ? "text-grey-400" : variant === "contained" ? `text-${shade > 400 ? "white" : `${color}-${shade === 50 ? 500 : shade + 500}`}` : `text-${color}-${shade}`
  return (
    <button
      className={`button ${buttonTw({ ...props, isAnimation, colorClass })}`}
      onClick={isDisabled ? undefined : onClick}
    >
      {isAnimation && <Bubble color={color} shade={variant === "contained" ? shade : 0} />}
      {iconPosition === "left" && iconName && (
        <Icon
          className={`${colorClass} ${isCircle ? "" : "mr-2"} ${size === "xm" ? "h-3" : size === "sm" ? "h-4" : size === "md" ? "h-5" : size === "lg" ? "h-6" : "h-7"}`}
          name={iconName}
          type={iconType}
        />
      )}
      {children}
      {iconPosition === "right" && iconName && (
        <Icon
          className={`${colorClass}  ${isCircle ? "" : "ml-2"} ${size === "xm" ? "h-3" : size === "sm" ? "h-4" : size === "md" ? "h-5" : size === "lg" ? "h-6" : "h-7"}`}
          name={iconName}
          type={iconType}
        />
      )}
    </button>
  )
}