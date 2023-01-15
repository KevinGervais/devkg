import React from "react"
import { connect } from "react-redux"
import SwipeableViews from "react-swipeable-views"

import { tw } from "@/shared"

import { IS_CORDOVA } from "@/constants"
import { throttle } from "@/functions"
import { ReduxState } from "@/redux/model"
import { resetScrollTop } from "@/ui/functions"

import { SliderIndexes } from "./SliderIndexes"
import { ViewSwitcherProps, ViewSwitcherState } from "./model"
class ViewSwitcherNotConnected extends React.Component<ViewSwitcherProps, ViewSwitcherState> {
  isSwipedUp: boolean = false
  hasSwipedUpUpdated: boolean = false
  viewSwitcherRef: any
  throttledFn: () => void
  constructor(props: ViewSwitcherProps) {
    super(props)
    this.state = {
      isSwiping: false,
      pressingPosition: undefined
    }
    this.handleKeydown = this.handleKeydown.bind(this)
    this.handleSwipeEnd = this.handleSwipeEnd.bind(this)
    this.ajustHeight = this.ajustHeight.bind(this)
    this.throttledFn = throttle(() => this.ajustHeightNoArgs.bind(this), 30)
    window.addEventListener("keydown", this.handleKeydown)
    window.addEventListener("mouseup", this.handleSwipeEnd)
    window.addEventListener("touchend", this.handleSwipeEnd);
    (window.visualViewport || window).addEventListener("resize", this.throttledFn)
  }

  handleSwipeEnd(): void {
    const { isSwiping } = this.state
    this.isSwipedUp = true
    if (isSwiping) {
      this.setState({ isSwiping: false })
    }
  }
  componentDidMount(): void {
    if (!IS_CORDOVA) {
      const node: HTMLDivElement | null = this.viewSwitcherRef.containerNode
      if (!node) {
        return
      }
      node.style.height = "0"
      window.setTimeout(() => {
        this.ajustHeight()
        node.style.height = ""
      }, 0)
    } else {
      this.ajustHeight()
    }
  }
  componentDidUpdate(oldProps: ViewSwitcherProps, oldState: ViewSwitcherState): void {
    if (oldProps.index !== this.props.index) {
      resetScrollTop()
      if (this.props.index === 0 && Math.abs(this.props.index - oldProps.index) > 1) {
        window.setTimeout(() => {
          this.props.onChangeIndex(1)
          window.setTimeout(() => {
            this.props.onChangeIndex(0)
          }, 100)
        }, 30)
      }
    }
    const hasSwiped = !oldState.isSwiping && this.state.isSwiping
    this.ajustHeight(hasSwiped || this.hasSwipedUpUpdated)
    if (hasSwiped) {
      this.hasSwipedUpUpdated = true
    } else {
      this.hasSwipedUpUpdated = false
    }
  }
  ajustHeightNoArgs(): void {
    this.ajustHeight()
  }
  ajustHeight(isChanging?: boolean): void {
    const { index } = this.props
    if (this.viewSwitcherRef) {
      const node: HTMLDivElement = this.viewSwitcherRef.containerNode
      let minHeight: number = Infinity
      let currentHeight = Infinity

      Array.from(node.children).forEach((item, itemIndex) => {
        const child = item.children[0]! as HTMLDivElement | undefined
        if (!child) {
          return
        }
        child.style.height = "initial"
        const height = child.scrollHeight
        if (minHeight > height) {
          minHeight = height
        }
        if (itemIndex === index) {
          currentHeight = height
        }
        child.style.height = ""
      })
      if (minHeight < currentHeight && isChanging) {
        minHeight = currentHeight
      }

      Array.from(node.children).forEach((item, itemIndex) => {
        const child = item.children[0]! as HTMLDivElement | undefined
        if (!child) {
          return
        }
        if (itemIndex !== index && (!isChanging || !IS_CORDOVA)) {
          child.style.height = `${minHeight}px`
        }
      })
    }
  }
  public componentWillUnmount(): void {
    window.removeEventListener("keydown", this.handleKeydown)
    window.removeEventListener("mouseup", this.handleSwipeEnd)
    window.removeEventListener("touchend", this.handleSwipeEnd);
    (window.visualViewport || window).removeEventListener("resize", this.throttledFn)

  }
  public render(): JSX.Element {
    const { index, isDisabled, onChangeIndex, springConfig, isPointerEventDisabled, children, isHideIndexes, isDragHover } = this.props
    const { pressingPosition, isSwiping } = this.state
    const animDuration = springConfig ? Number(springConfig.duration.split("s")[0]) * 1000 : 100
    const childrenArray = React.Children.toArray(children)

    return (
      <>
        <SwipeableViews
          className={tw`
            view-switcher
            relative
            flex-[5]
            children:h-full
            children:children:h-full
            children:children:children:h-full
            children:children:children:col
            ${isSwiping ? "cursor-grabbing" : ""}
            ${isPointerEventDisabled ? "all:touch-none all:pointer-events-none" : ""}
          `}
          index={index}
          ref={(ref: any) => {
            this.viewSwitcherRef = ref
            if (ref && ref.rootNode) {
              const elem = ref.rootNode as HTMLElement
              if (elem.parentElement && !elem.parentElement.classList.contains("relative")) {
                elem.parentElement.classList.add("relative")
              }
            }
          }}
          springConfig={{ duration: "0.1s", easeFunction: "ease-in-out", delay: "0s" }}
          hysteresis={0.3}
          enableMouseEvents={true}
          disabled={isDisabled || isDragHover}
          onChangeIndex={(newIndex: number) => window.setTimeout(() => onChangeIndex && onChangeIndex(newIndex), animDuration + 100)}
          onMouseDown={(evt: React.MouseEvent<HTMLDivElement>) => {
            this.isSwipedUp = false
            this.setState({ pressingPosition: [evt.clientX, evt.clientY] })
          }}
          onTouchStart={(evt: React.TouchEvent<HTMLDivElement>) => {
            this.isSwipedUp = false
            const touch = evt.touches[0] || evt.changedTouches[0]
            if (touch) {
              this.setState({ pressingPosition: [touch.pageX, touch.pageY] })
            }
          }}
          onMouseMove={(evt: React.MouseEvent<HTMLDivElement>) => {
            if (pressingPosition) {
              const distance = Math.sqrt(Math.pow(pressingPosition[0] - evt.clientX, 2) + Math.pow(pressingPosition[1] - evt.clientY, 2))
              if (!isSwiping && pressingPosition[0] !== -1 && distance > 20 && !this.isSwipedUp) {
                this.setState({ isSwiping: true })


              }
            }
          }}
          onTouchMove={(evt: React.TouchEvent<HTMLDivElement>) => {
            if (pressingPosition) {
              const touch = evt.touches[0] || evt.changedTouches[0]
              if (touch) {
                const distance = Math.sqrt(Math.pow(pressingPosition[0] - touch.pageX, 2) + Math.pow(pressingPosition[1] - touch.pageY, 2))
                if (!isSwiping && pressingPosition[0] !== -1 && distance > 20 && !this.isSwipedUp) {
                  this.setState({ isSwiping: true })
                }
              }
            }
          }}
        >
          {children}
        </SwipeableViews>

        {!isHideIndexes && index !== undefined && (
          <SliderIndexes
            index={index}
            childrenArray={childrenArray}
            onChangeIndex={onChangeIndex}
          />
        )}
      </>
    )
  }

  private handleKeydown(evt: KeyboardEvent): void {
    const { children, index, onChangeIndex } = this.props
    const indexCount = React.Children.toArray(children).length
    if (evt.altKey && onChangeIndex) {
      if (evt.key === "ArrowRight" && index !== undefined && index + 1 < indexCount) {
        onChangeIndex(index + 1)
      }
      if (evt.key === "ArrowLeft" && index !== undefined && index > 0) {
        onChangeIndex(index - 1)
      }
    }
  }
}


const mapStateToProps = (state: ReduxState) => ({
  say: state.languages.say,
  isDragHover: state.ui.isDragHover,
})

export const ViewSwitcherConnector = connect(mapStateToProps)
export const ViewSwitcher = ViewSwitcherConnector(ViewSwitcherNotConnected)
