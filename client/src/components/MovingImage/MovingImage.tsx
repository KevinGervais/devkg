import { Component } from "react"
import { ConnectedProps, connect } from "react-redux"

import { ReduxState } from "@/redux/model"

import { AllHorizontalPositions, AllVerticalPositions, MovingImageProps, MovingImageState } from "./model"

export class MovingImageNotConnected extends Component<MovingImageProps & ConnectedProps<typeof connector>, MovingImageState> {
  state: Readonly<MovingImageState> = {
    isMoving: false,
    imageAspectRatio: undefined,
    isImageRerendered: false
  }
  componentDidMount(): void {
    const { isActive } = this.props
    const { imageAspectRatio } = this.state
    if (isActive && imageAspectRatio !== undefined) {
      window.setTimeout(() => {
        this.setState({ isMoving: true })
      }, 30)
    }
  }
  componentDidUpdate(oldProps: MovingImageProps): void {
    const { isActive } = this.props
    if (oldProps.isActive && !isActive) {
      this.setState({ isMoving: false })
    } else if (!oldProps.isActive && isActive) {
      this.setState({ isMoving: true })
    }
  }
  render(): JSX.Element {
    const { from, to, src, speed, sreenAspectRatio, isActive } = this.props
    const { isMoving, imageAspectRatio, isImageRerendered } = this.state
    const [hStart, vStart] = from.split(" ") as [AllHorizontalPositions, AllVerticalPositions]
    const [hEnd, vEnd] = to.split(" ") as [AllHorizontalPositions, AllVerticalPositions]
    const zoom = 1.1
    let finalScale = imageAspectRatio! / sreenAspectRatio * zoom
    let widthPercentage = (1 - 1 / finalScale) * 100 / 2
    let heightPercentage = (1 - 1 / zoom) * 100 / 2 * sreenAspectRatio / imageAspectRatio!
    if (imageAspectRatio! / sreenAspectRatio < 1) {
      finalScale = sreenAspectRatio / imageAspectRatio! * zoom
      widthPercentage = (1 - 1 / zoom) * 100 / 2 * imageAspectRatio! / sreenAspectRatio
      heightPercentage = (1 - 1 / finalScale) * 100 / 2
    }
    const horizontalMap = {
      left: widthPercentage,
      center: 0,
      right: -widthPercentage,
    }
    const verticalMap = {
      top: heightPercentage,
      center: 0,
      bottom: -heightPercentage,
    }
    const [hStartNum, vStartNum] = [horizontalMap[hStart], verticalMap[vStart]]
    const [hEndNum, vEndNum] = [horizontalMap[hEnd], verticalMap[vEnd]]

    return (
      <div className="overflow-hidden full-absolute">
        <img src={src}
          className="z-10 object-contain full-absolute"
          alt={src.split(".")[0]?.split("/").reverse()[0]}
          onLoad={evt =>
            this.setState({
              imageAspectRatio: evt.currentTarget.naturalWidth / evt.currentTarget.naturalHeight,
              isMoving: isActive,
            }, () => {
              window.setTimeout(() => {
                this.setState({ isImageRerendered: true })
              }, 30)
            })}
          style={{
            transition: isImageRerendered ? `transform ${speed}ms ease-in-out` : "",
            transform: isImageRerendered ? `scale(${finalScale}) translate(${isMoving ? hEndNum : hStartNum}%, ${isMoving ? vEndNum : vStartNum}%)` : `scale(${finalScale})`
          }} />
      </div>
    )
  }
}

const connector = connect((state: ReduxState) => ({
  sreenAspectRatio: state.ui.vw! / state.ui.vh!,
}))
export const MovingImage = connector(MovingImageNotConnected)