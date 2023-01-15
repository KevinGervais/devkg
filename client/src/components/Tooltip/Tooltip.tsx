import { useRef, useState } from "react"

import { tw } from "@/shared"

import { IS_DESKTOP } from "@/constants"

import { Class, SafeFixed } from ".."
import { TooltipProps } from "./model"


export function Tooltip({
  className,
  optionList,
  outputList,
  children,
  title,
  maxWidth,
  capitalize,
  delay,
  mobileHideDelay,
  mobileDelay
}: TooltipProps): JSX.Element | null {
  const isTitleOnly = !optionList && !outputList && !children
  const [isActive, setState] = useState(false)
  const pointerRef = useRef<HTMLDivElement>(null)
  const subParentRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const hasTouchupRef = useRef(false)
  const timeoutIdRef = useRef(-1)

  const onTouchStart = (): void => {
    hasTouchupRef.current = false
    setTimeout(() => {
      if (!isActive && !hasTouchupRef.current) {
        setState(true)
      }
    }, mobileDelay === undefined ? 500 : mobileDelay)
  }

  const onTouchEnd = (): void => {
    hasTouchupRef.current = true
    window.setTimeout(() => {
      setState(false)
    }, mobileHideDelay || 0)
  }

  const onMouseEnter = (): void => {
    timeoutIdRef.current = window.setTimeout(
      () => {
        setState(true)
      },
      delay === undefined ? 1000 : delay
    )
  }

  const onMouseLeave = (): void => {
    clearTimeout(timeoutIdRef.current)
    setState(false)
  }

  const setPosition = (): void => {
    if (
      !tooltipRef.current ||
      !pointerRef.current ||
      !subParentRef.current ||
      !subParentRef.current?.parentNode
    ) {
      return
    }
    const parent: DOMRect = (subParentRef.current.parentNode as HTMLElement).getBoundingClientRect()
    const { width, height } = tooltipRef.current.getBoundingClientRect()
    const isBottom = parent.y - height - 8 < 10
    const isLeftOkay = parent.x + parent.width / 2 - width / 2 > 50
    const winWidth = window.visualViewport?.width || window.innerWidth
    const winHeight = window.visualViewport?.height || window.innerHeight
    const isRightOkay = winWidth - parent.right > 10
    if (isLeftOkay && isRightOkay) {
      tooltipRef.current.style.left = parent.x + parent.width / 2 - width / 2 + "px"
      pointerRef.current.style.left = width / 2 - 8 + "px"
    } else if (winWidth - parent.right > 10) {
      tooltipRef.current.style.left = parent.x + "px"
      pointerRef.current.style.left = " 5px"
    } else {
      tooltipRef.current.style.right = winWidth - parent.right + "px"
      pointerRef.current.style.right = "5px"
    }
    if (isBottom) {
      tooltipRef.current.style.top = parent.bottom + 8 + "px"
      pointerRef.current.style.bottom = "initial"
      pointerRef.current.style.top = "-8px"
      pointerRef.current.style.borderBottomWidth = "8px"
      pointerRef.current.style.borderTopWidth = "0"
    } else {
      tooltipRef.current.style.bottom = winHeight - parent.y + 8 + "px"
      pointerRef.current.style.top = "initial"
      pointerRef.current.style.bottom = "-8px"
      pointerRef.current.style.borderTopWidth = "8px"
      pointerRef.current.style.borderBottomWidth = "0"
    }
  }
  return (
    <SafeFixed parentRef={subParentRef}>
      <Class
        didMount={() => {
          setPosition()
          if (subParentRef && subParentRef.current?.parentNode) {
            (subParentRef.current.parentNode as HTMLElement).style.position = "relative"
            if (IS_DESKTOP) {
              subParentRef.current.parentNode.addEventListener("mouseenter", onMouseEnter)
              subParentRef.current.parentNode.addEventListener("mouseleave", onMouseLeave)
            }
            if (!IS_DESKTOP) {
              subParentRef.current.parentNode.addEventListener("touchstart", onTouchStart)
              window.addEventListener("touchend", onTouchEnd)
            }
          }
        }}
        didUpdate={() => {
          setPosition()
        }}
        willUnmout={() => {
          if (subParentRef && subParentRef.current?.parentNode) {
            if (IS_DESKTOP) {
              subParentRef.current.parentNode.removeEventListener("mouseenter", onMouseEnter)
              subParentRef.current.parentNode.removeEventListener("mouseleave", onMouseLeave)
            }
            if (!IS_DESKTOP) {
              subParentRef.current.parentNode.removeEventListener("touchstart", onTouchStart)
              window.removeEventListener("touchend", onTouchEnd)
            }
          }
        }}
      >
        <div
          className={tw`
            tooltip
            center
            select-none
            flex-col
            fixed
            py-1
            px-5
            bg-black/50
            backdrop-blur-lg
            bottom-[calc(100%+10px)]
            min-w-[40px]
            w-max
            h-max
            text-center
            rounded-md
            z-[300000]
            text-sm
            all:text-white
            text-white
            pointer-events-none
            touch-none
            in-.katex:!text-inherit
            ${className}
            ${!isActive && "opacity-0"}
            ${capitalize && "capitalize"}
          `}
          style={{ maxWidth: `${maxWidth}px` }}
          ref={tooltipRef}
        >
          {title && isTitleOnly && title}
          {title && !isTitleOnly && <h4 className="mt-2 mb-2 text-base font-semibold">{title}</h4>}
          {(optionList || []).map((val: any, index: number) => (
            <span key={index} className="mb-1">{outputList ? outputList[index] : val}</span>
          ))}
          {children}
          <div
            className="absolute w-0 h-0 border-l-8 border-r-8 border-solid pointer -bottom-2 border-black/50 border-x-trans backdrop-blur-lg"
            ref={pointerRef}
          />
        </div>
      </Class>
    </SafeFixed>
  )
}