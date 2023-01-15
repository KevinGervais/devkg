
import { useState } from "react"

import { BubbleProps } from "./model"
import { twClasses } from "./twClasses"

export function Bubble({ color, shade }: BubbleProps): JSX.Element {
  const [rect, setState] = useState<{ width: string, left: string, top: string } | undefined>(undefined)
  let increm = 200
  if (shade === 50) {
    increm = 250
  }
  const dynamicColor = `bg-${color}-${shade + increm}/50`
  const finalColor = shade <= 200 ? dynamicColor : "bg-white/50"
  if (shade <= 200 && !twClasses[dynamicColor as keyof typeof twClasses]) {
    window.alert(`Bubble/twClasses.ts is missign ${dynamicColor}`)
  }

  return (
    <div
      className="absolute inset-0 flex w-full h-full overflow-hidden z-[1] bubble"
      ref={ref => {
        if (!ref) {
          return
        }
        const button = ref.parentElement as HTMLElement
        if (!button.classList.contains("relative")) {
          button.classList.add("relative")
        }
        if (!button.classList.contains("overflow-hidden")) {
          button.classList.add("overflow-hidden")
        }
      }}
      onMouseDown={evt => {
        const button = evt.currentTarget.parentElement as HTMLElement
        const { left, top } = button.getBoundingClientRect()
        const diameter = Math.max(button.clientWidth, button.clientHeight)
        const radius = diameter / 2
        const newState = {
          width: `${diameter}px`,
          left: `${evt.clientX - left - radius}px`,
          top: `${evt.clientY - top - radius}px`
        }
        if (rect) {
          setState(undefined)
          window.setTimeout(() => setState(newState), 30)
        } else {
          setState(newState)
        }
      }}
      onTouchStart={evt => {
        const button = evt.currentTarget.parentElement as HTMLElement
        const { left, top } = button.getBoundingClientRect()
        const diameter = Math.max(button.clientWidth, button.clientHeight)
        const radius = diameter / 2
        const posX = ((evt.touches || [])[0] || (evt.changedTouches || [])[0])!.pageX
        const posY = ((evt.touches || [])[0] || (evt.changedTouches || [])[0])!.pageY
        const newState = {
          width: `${diameter}px`,
          left: `${posX - left - radius}px`,
          top: `${posY - top - radius}px`
        }
        if (rect) {
          setState(undefined)
          window.setTimeout(() => setState(newState), 30)
        } else {
          setState(newState)
        }
      }}
    >
      {rect && (
        <div
          style={{ width: rect.width, height: rect.width, left: rect.left, top: rect.top }}
          className={`absolute rounded-full scale-0 animate-ripple pointer-events-none touch-none ${finalColor}`} />
      )}
    </div >
  )
}