import React from "react"
import { connect } from "react-redux"
import SwipeableViews from "react-swipeable-views"

import { tw } from "@/shared"

import { ReduxState } from "@/redux/model"

import { SliderIndexes } from "./SliderIndexes"
import { SliderProps, SliderState } from "./model"
class SliderNotConnected extends React.Component<SliderProps, SliderState> {
  isSwipedToFirst: boolean = false
  intervalId: number = -1
  constructor(props: SliderProps) {
    super(props)
    this.state = {
      isSwiping: false,
      pressingPosition: undefined
    }
    this.handleKeydown = this.handleKeydown.bind(this)
    window.addEventListener("keydown", this.handleKeydown)
  }

  UNSAFE_componentWillUpdate(newProps: SliderProps): void {
    const indexLength = React.Children.toArray(newProps.children).length
    if ((newProps.index === 0 && this.props.index === indexLength) || (newProps.index === indexLength - 1 && this.props.index === -1)) {
      this.isSwipedToFirst = true
    }
  }

  public componentWillUnmount(): void {
    window.removeEventListener("keydown", this.handleKeydown)

  }
  public render(): JSX.Element {
    const { index, onChangeIndex, springConfig, children, delay } = this.props
    const { pressingPosition, isSwiping } = this.state
    const animDuration = springConfig ? Number(springConfig.duration.split("s")[0]) * 1000 : 400
    const childrenArray = React.Children.toArray(children)
    if (index === childrenArray.length) {
      window.setTimeout(() => {
        onChangeIndex(0)
      }, animDuration)
    } else if (index === -1) {
      window.setTimeout(() => {
        onChangeIndex(childrenArray.length - 1)
      }, 30)
    }
    if (this.isSwipedToFirst) {
      window.setTimeout(() => {
        this.isSwipedToFirst = false
      }, 0)
    }
    if (delay) {
      window.clearInterval(this.intervalId)
      this.intervalId = window.setInterval(() => {
        onChangeIndex(index + 1)
      }, delay)
    }
    const FirstItem = React.cloneElement(childrenArray[0] as React.ReactElement)
    const lastItem = React.cloneElement(childrenArray[childrenArray.length - 1] as React.ReactElement)
    return (
      <div className="relative">
        <SwipeableViews
          className={tw`
          slider
          relative
          flex-[5]
          children:h-full
          children:children:h-full
          children:children:children:h-full
          children:children:children:col
          ${isSwiping ? "cursor-grabbing" : ""}
        `}
          index={index + 1}
          springConfig={{ duration: this.isSwipedToFirst ? "0s" : "0.4s", easeFunction: "ease-in-out", delay: "0s" }}
          hysteresis={0.3}
          enableMouseEvents={true}
          onChangeIndex={(newIndex: number) => {
            window.setTimeout(() => onChangeIndex && onChangeIndex(newIndex - 1), this.isSwipedToFirst ? 0 : animDuration + 100)
          }}
          onMouseDown={(evt: React.MouseEvent<HTMLDivElement>) => this.setState({ pressingPosition: [evt.clientX, evt.clientY] })}
          onTouchStart={(evt: React.TouchEvent<HTMLDivElement>) => {
            const touch = evt.touches[0] || evt.changedTouches[0]
            if (touch) {
              this.setState({ pressingPosition: [touch.pageX, touch.pageY] })
            }
          }}
          onMouseMove={(evt: React.MouseEvent<HTMLDivElement>) => {
            if (pressingPosition) {
              const distance = Math.sqrt(Math.pow(pressingPosition[0] - evt.clientX, 2) + Math.pow(pressingPosition[1] - evt.clientY, 2))
              if (!isSwiping && pressingPosition[0] !== -1 && distance > 20) {
                this.setState({ isSwiping: true })
              }
            }
          }}
          onTouchMove={(evt: React.TouchEvent<HTMLDivElement>) => {
            if (pressingPosition) {
              const touch = evt.touches[0] || evt.changedTouches[0]
              if (touch) {
                const distance = Math.sqrt(Math.pow(pressingPosition[0] - touch.pageX, 2) + Math.pow(pressingPosition[1] - touch.pageY, 2))
                if (!isSwiping && pressingPosition[0] !== -1 && distance > 20) {
                  this.setState({ isSwiping: true })
                }
              }
            }
          }}
        >
          {lastItem}
          {children}
          {FirstItem}
        </SwipeableViews>

        {index !== undefined && (
          <SliderIndexes
            index={index}
            childrenArray={childrenArray}
            onChangeIndex={onChangeIndex}
          />
        )}
      </div>
    )
  }
  private handleKeydown(evt: KeyboardEvent): void {
    const { children, index, onChangeIndex } = this.props
    const indexCount = React.Children.toArray(children).length + 1
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
})

export const SliderConnector = connect(mapStateToProps)
export const Slider = SliderConnector(SliderNotConnected)
