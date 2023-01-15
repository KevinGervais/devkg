import ReactDOM from "react-dom"

import { PickerLayoutParentState } from "../model"


export function getNewStyles({
  state,
  parentRef,
}: {
  state: PickerLayoutParentState,
  parentRef: HTMLDivElement | null
}): PickerLayoutParentState {
  const newState: PickerLayoutParentState = {}

  if (!parentRef) {
    return state
  }
  const parentNode: Element = ReactDOM.findDOMNode(
    parentRef.parentNode as Element
  ) as Element
  if (!parentNode) {
    return state
  }
  const { bottom, top, left, width, right } = parentNode.getBoundingClientRect()
  const fullHeight: number = window.visualViewport?.height || window.innerHeight
  const fullWidth: number = window.visualViewport?.width || window.innerWidth
  if (fullWidth - right < 150) {
    newState.right = fullWidth - right
  } else {
    newState.left = left
  }
  newState.minWidth = width
  if (fullHeight - bottom < fullHeight / 3) {
    newState.bottom = fullHeight - top
    newState.maxHeight = top - 20
  } else {
    newState.top = bottom + 1
    newState.maxHeight = fullHeight - bottom - 20
  }
  return newState
}