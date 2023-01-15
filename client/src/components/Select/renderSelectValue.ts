import dayjs from "dayjs"
import { ReactNode } from "react"

export function renderSelectValue(
  output?: ReactNode,
  auto?: string | number,
  plural?: string,
  placeholder?: string | number,
  children?: ReactNode
): React.ReactNode {
  if (children) {
    return children
  }
  if (typeof output === "object" && !(output instanceof dayjs)) {
    return output as JSX.Element
  }
  if (!output && output !== 0 && placeholder) {
    return placeholder
  }
  if (output instanceof dayjs) {
    return (output as unknown as dayjs.Dayjs).format("ddd MMM D")
  }
  if (plural && output !== undefined && output > 1) {
    auto = plural
  }
  return `${output || ""} ${auto || ""}`
}

