import ReactDOM from "react-dom"

import { DropdownProps, DropdownState } from "./model"

export function getNewStyles({
  isRightPosition,
  isFullWidth,
  state,
  parentRef,
  childRef,
  listLength
}: Pick<DropdownProps<any>, "isRightPosition" | "isFullWidth"> & {
  listLength: number,
  state: DropdownState,
  parentRef: HTMLDivElement | null
  childRef: HTMLDivElement | null
}): DropdownState {
  const winWidth = window.visualViewport?.width || window.innerWidth
  const winHeight = window.visualViewport?.height || window.innerHeight
  const newState: DropdownState = {}

  if (!parentRef || !childRef) {
    return state
  }
  const parentNode: Element = ReactDOM.findDOMNode(
    parentRef.parentNode as Element
  ) as Element
  if (!parentNode) {
    return state
  }

  const { bottom, top, left, width, right } = parentNode.getBoundingClientRect()

  if (!isFullWidth && ((winWidth - right < 100) || isRightPosition)) {
    newState.left = left + width - childRef.clientWidth
  } else {
    newState.left = left
  }
  if (isFullWidth) {
    newState.width = width
  } else {
    newState.minWidth = width
  }
  if (winHeight - bottom < winHeight / 3) {
    const listHeight = 45 * listLength
    const maxHeight = top - 20
    const finalHeight = maxHeight < listHeight ? maxHeight : listHeight
    newState.top = top - finalHeight
    newState.maxHeight = maxHeight
  } else {
    newState.top = bottom - 5
    newState.maxHeight = winHeight - bottom - 20
  }
  return newState
}