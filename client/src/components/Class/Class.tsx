import { Canceler } from "axios"
import { Component } from "react"

import { ClassProps } from "./model"

export class Class<Props> extends Component<ClassProps<Props>> {
  public cancelImageRequest?: Canceler
  public isUnmount: boolean = false
  constructor(props: ClassProps<Props>) {
    super(props)
    if (props.handleInitAxiosRequest) {
      this.cancelImageRequest = props.handleInitAxiosRequest(this)
    }
    if (props.willMount) {
      props.willMount(this)
    }
  }
  componentDidMount(): void {
    if (!this.isUnmount && this.props.didMount) {
      this.props.didMount(this)
    }
  }
  componentDidUpdate(oldProps: ClassProps<Props>): void {
    if (!this.isUnmount && this.props.didUpdate) {
      this.props.didUpdate(oldProps.props!, this)
    }
  }
  componentWillUnmount(): void {
    this.isUnmount = true
    if (this.cancelImageRequest) {
      this.cancelImageRequest()
    }
    if (this.props.willUnmout) {
      this.props.willUnmout(this)
    }
  }
  render(): JSX.Element {
    const { children } = this.props
    return (
      <>
        {children}
      </>
    )
  }
}
