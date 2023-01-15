import { useRef } from "react"
import { Root, createRoot } from "react-dom/client"
import { Provider } from "react-redux"

import { getOrSetStore } from "@/redux"

import { Class } from "../Class"

export function SafeFixed({ children, parentRef }: { children?: any, parentRef?: React.RefObject<HTMLDivElement> }): JSX.Element {
  const safeFixedNodeRef = useRef(document.createElement("div"))
  const rootRef = useRef<Root | undefined>()
  return (
    <Class
      children={<div ref={parentRef} />}
      didMount={() => {
        rootRef.current = createRoot(safeFixedNodeRef.current)
        safeFixedNodeRef.current.className = "h-0"
        document.body.prepend(safeFixedNodeRef.current)
        rootRef.current.render(
          <Provider store={getOrSetStore()}>
            {children}
          </Provider>
        )
      }}
      didUpdate={() => {
        rootRef.current?.render(
          <Provider store={getOrSetStore()}>
            {children}
          </Provider>
        )
      }}
      willUnmout={() => {
        document.body.removeChild(safeFixedNodeRef.current)
        setTimeout(() => rootRef.current?.unmount())

      }}
    />
  )
}
