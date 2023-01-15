import { OptionalParentProps } from "./model"

export function OptionalParent({ children, parent, isChildrenOnly }: OptionalParentProps): JSX.Element {
  if (isChildrenOnly) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return parent(children)
  }
}