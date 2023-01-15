import { useState } from "react"

import { ProgressCountProps } from "./model"

export function ProgressCount({ count }: ProgressCountProps): JSX.Element {
  const [currentCount, setCurrentCount] = useState(0)
  if (currentCount < count) {
    window.setTimeout(() => {
      const stepTime = 5300 / 30
      const step = count / stepTime
      const newCount = currentCount + step
      setCurrentCount(newCount > count ? count : newCount)
    }, 30)
  }
  return <>{currentCount.toFixed(currentCount === count || count > 10 ? 0 : 2)}</>
}