import { useState } from "react"

export function useRefreshOnMount(): void {
  const [state, setState] = useState(false)
  if (state === false) {
    window.setTimeout(() => {
      setState(true)
    })
  }
}