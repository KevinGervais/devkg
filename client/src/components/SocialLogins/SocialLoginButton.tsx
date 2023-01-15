import React from "react"
import SocialLogin, { Props } from "react-social-login"

import { useReduxState } from "@/redux"

import { Bubble } from "../Bubble"
import { Icon } from "../Icon"
import { SocialLoginButtonProps } from "./modal"

class InnerButton extends React.Component<SocialLoginButtonProps> {
  render(): JSX.Element {
    const {
      triggerLogin,
      brand,
      say,
      className
    } = this.props

    return (
      <div
        className={`clickable h-9 mb-4 rounded-md mouse:hover:opacity-90 flex items-center  px-3 ${className}`}
        onClick={triggerLogin}>
        <Bubble color="primary" shade={500} />
        <Icon type="brands" name={brand} className="h-5 mr-3 text-white" />
        <div className="text-sm text-white">{say.loginWith(brand)}</div>
      </div>
    )
  }
}



export function SocialLoginButton(props: Props): JSX.Element {
  const LoginButton = SocialLogin(InnerButton) as (props: Props & Pick<SocialLoginButtonProps, "brand">) => JSX.Element
  const say = useReduxState(state => state.languages.say)
  return (
    <LoginButton
      {...props}
      brand={props.provider}
      say={say}
      redirect="https://kevingervais.herokuapp.com/settings"
    />
  )
}
