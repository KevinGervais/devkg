import { Component } from "react"
import { ConnectedProps, connect } from "react-redux"

import * as popups from "@/popups/components"
import { PRIVATE_POPUP_LIST } from "@/popups/constants/PRIVATE_POPUP_LIST"
import { getReduxState, setReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"
import { goToExactPath } from "@/routes"

class ActivePopupNotConnected extends Component<ConnectedProps<typeof connector>> {
  componentDidUpdate(): void {
    const { name, props, isLoggedin, isLoginRedirect } = this.props
    if (!isLoggedin && name && PRIVATE_POPUP_LIST.includes(name) && !isLoginRedirect) {
      setReduxState("ui", {
        loginRedirect: {
          pathName: getReduxState().routes.pathName,
          popup: {
            name,
            props
          },
        }
      }, () => {
        setReduxState("popups", {
          name: undefined,
          props: undefined
        }, () => {
          goToExactPath("/login")
        })
      })
    }
  }
  render(): JSX.Element | null {
    const { name, props } = this.props
    const Popup: any | undefined = (popups as any)[name]
    if (Popup) {
      return <Popup {...props || {}} />
    } else {
      return null
    }

  }
}

const connector = connect((state: ReduxState) => ({
  name: state.popups.name,
  props: state.popups.props,
  isLoggedin: !!state.users.currentUser,
  isLoginRedirect: !!state.ui.loginRedirect
}))

export const ActivePopup = connector(ActivePopupNotConnected)