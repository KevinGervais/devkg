import { useEffect } from "react"

export function useWillMount(callback: () => void): void {
  useEffect(() => {
    callback()
    // eslint-disable-next-line
  }, [])
}