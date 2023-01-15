import { useRef } from "react"
import { useInViewport } from "react-in-viewport"
import styled from "styled-components"

import { Icon } from ".."
import { ProgressCount } from "./ProgressCount"
import { CircularProgressBarProps } from "./model"


const ProgressLeftStyled = styled.div`
  animation: left 3s linear both;
  @keyframes left{
  100%{
    transform: rotate(180deg);
  }
}`

const ProgressRightStyled = styled.div`
  animation: right 3s linear both;
  animation-delay: 3s;
  @keyframes right{
    100% {
    transform: rotate(180deg);
  }
}
`
export function CircularProgressBar({ count, iconName, sufix }: CircularProgressBarProps): JSX.Element | null {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const { inViewport, enterCount } = useInViewport(ref)
  if (!inViewport && enterCount === 0) {
    return <div ref={ref} className="circular-progress" />
  }
  return (
    <div ref={ref} className="circular-progress">
      <div className="overflow-hidden col h-[100px] w-[100px] relative rounded-full">
        <div className="absolute z-[6] top-[2.5px] left-[2.5px] h-[95px] w-[95px]  bg-white rounded-full"/>
        <div className="center text-base whitespace-nowrap font-medium text-primary-500 flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <span>
            <ProgressCount count={count} />
            {sufix || ""}
          </span>
          <Icon name={iconName} className="h-6 mt-1" />
        </div>
        <div className="circle">
          <div className="absolute w-full h-full bg-grey-200" style={{ clip: "rect(0px, 100px, 100px, 50px)" }}>
            <ProgressLeftStyled
              className="absolute z-[1] w-full h-full bg-primary-500"
              style={{ clip: "rect(0px, 50px, 100px, 0px)" }}
            />
          </div>
          <div className="absolute z-[3] w-full h-full rotate-180 bg-grey-200" style={{ clip: "rect(0px, 100px, 100px, 50px)" }}>
            <ProgressRightStyled
              className="absolute w-full h-full bg-primary-500"
              style={{ clip: "rect(0px, 50px, 100px, 0px)" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
