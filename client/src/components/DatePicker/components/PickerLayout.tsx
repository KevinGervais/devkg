import { useRef, useState } from "react"
import ReactDOM from "react-dom"

import { Class } from "@/components/Class"
import { SafeFixed } from "@/components/SafeFixed"

import { getNewStyles } from "../functions/getNewStyles"
import { getScrollParents } from "../functions/getScrollParents"
import { PickerLayoutParentState, PickerLayoutProps } from "../model"

export function PickerLayout({ children }: PickerLayoutProps): JSX.Element {
  const parentRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<PickerLayoutParentState>({})
  const setStylesRef = useRef(
    function setStyles(): void {
      setState(getNewStyles({
        parentRef: parentRef.current,
        state
      }))
    }
  )
  const scrollNodesRef = useRef<Element[]>([])

  return (
    <SafeFixed parentRef={parentRef}>
      <Class
        didMount={() => {
          (window.visualViewport || window).addEventListener("resize", setStylesRef.current)
          const dropdownNode = ReactDOM.findDOMNode(
            parentRef.current
          ) as Element
          scrollNodesRef.current = getScrollParents(
            [],
            dropdownNode.parentNode as Element | null
          )
          scrollNodesRef.current.forEach((node: Element) => {
            node.addEventListener("scroll", setStylesRef.current)
          })
          setStylesRef.current()
          window.setTimeout(() => {
            setStylesRef.current()
          }, 30)
        }}

        willUnmout={() => {
          (window.visualViewport || window).removeEventListener("resize", setStylesRef.current)
          scrollNodesRef.current.forEach((node: Element) => {
            node.removeEventListener("scroll", setStylesRef.current)
          })
        }}
      >
        <div
          id="date-picker-layout"
          className="z-[200000000000000000] absolute"
          style={state}
          onClick={evt => evt.stopPropagation()}
        >
          {children}
        </div>
      </Class>
    </SafeFixed>
  )
}