import React from "react"

import { IS_DESKTOP } from "@/constants"

import { IphoneStyled } from "./IphoneStyled"
import { IphoneProps, IphoneState } from "./model"

export class Iphone extends React.Component<IphoneProps, IphoneState> {
  state: IphoneState = {
    clipPosition: 50
  }
  setPosition = (evt: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>, isMouse?: boolean) => {
    const { left, width } = (evt.target as HTMLDivElement).getBoundingClientRect()
    const touchEvt = evt as React.TouchEvent<HTMLDivElement>
    const mouseEvt = evt as React.MouseEvent<HTMLDivElement, MouseEvent>
    const posX = isMouse ? mouseEvt.clientX : ((touchEvt.touches || [])[0] || (touchEvt.changedTouches || [])[0])!.pageX
    let percent = Math.round((posX - left) / width * 100) + 4
    if (percent < 0) {
      percent = 0
    }
    if (percent > 100) {
      percent = 100
    }
    this.setState({ clipPosition: percent })
  }
  render(): JSX.Element {
    const { img, img2, width, portraitWidth, maxWidth } = this.props
    const { clipPosition } = this.state
    return (
      <IphoneStyled
        className="iphone"
        isSplited={!!img2}
        width={width}
        portraitWidth={portraitWidth}
        maxWidth={maxWidth}
        clipPosition={clipPosition}
        onMouseMove={evt => IS_DESKTOP && this.setPosition(evt, true)}
        onTouchMove={evt => !IS_DESKTOP && this.setPosition(evt)}
      >
        <img alt="iphone-frame" src="./images/iphone.png" />
        <img alt={img.split("/").reverse()[0]!.split(".")[0]} src={img} />
        {img2 && <img alt={img2.split("/").reverse()[0]!.split(".")[0]} src={img2} />}
      </IphoneStyled>
    )
  }
}