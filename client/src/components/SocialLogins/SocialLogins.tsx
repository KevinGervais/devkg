import { memo, useState } from "react"

import { setReduxState } from "@/redux"
import { goToExactPath } from "@/routes"

import { SocialLoginButton } from "./SocialLoginButton"

export const SocialLogins = memo((): JSX.Element | null => {
  const [isActive, setActivity] = useState(false)
  if (!isActive) {
    setTimeout(() => setActivity(true), 100)
  }
  return (
    <div className="mb-6 col children:mb-2">
      <SocialLoginButton
        className="bg-google"
        provider="google"
        onLoginSuccess={result => console.log(result)}
        onLoginFailure={result => console.log(result)}
        appId="140747809012-iq6cbt6vkhbkodp0s5h3q5mq4osl7p10.apps.googleusercontent.com"
      />
      <SocialLoginButton
        onLoginSuccess={(result: {
          _profile: {
            firstName: string
            lastName: string
            email: string
          }
        }) => setReduxState("signIn", {
          firstName: result._profile.firstName,
          lastName: result._profile.lastName,
          email: result._profile.email,
        }, () => goToExactPath("/signin"))}
        className="bg-facebook"
        provider="facebook"
        appId="1182487109331329"
      />
      <SocialLoginButton
        onLoginSuccess={result => console.log(result)}
        onLoginFailure={result => console.log(result)}
        className="bg-instagram"
        provider="instagram"
        appId="1182487109331329"
      />
    </div>
  )
}, () => true)