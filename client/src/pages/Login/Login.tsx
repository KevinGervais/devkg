import { createOneSession } from "@/api/requests"
import { Input, LoginLayout, SocialLogins } from "@/components"
import { getReduxState, setReduxState, useReduxState } from "@/redux"
import { goToExactPath } from "@/routes"
import { AllRoutes } from "@/routes/model"


export function Login(): JSX.Element {
  const { say, errorMessage, emailField, passwordField, isSownPassword } = useReduxState(state => ({
    say: state.languages.say,
    errorMessage: state.ui.snackbar?.message,
    emailField: state.login.emailField,
    passwordField: state.login.passwordField,
    isSownPassword: state.login.isSownPassword
  }))


  const login = () => {
    const { loginRedirect } = getReduxState().ui
    if (loginRedirect) {
      createOneSession({ email: emailField, password: passwordField }, () => {
        window.setTimeout(() => {
          if (loginRedirect.pathName) {
            const pathList = loginRedirect.pathName.split("/")
            const lastPath = pathList[pathList.length - 1] as string
            const firstPath = pathList[1] as AllRoutes || ""
            goToExactPath(`/${firstPath}` as `/${AllRoutes}`, lastPath)
          }
          if (loginRedirect.popup) {
            setReduxState("popups", loginRedirect.popup)
          }
          setReduxState("ui", { loginRedirect: undefined })
        }, 500)
      })
    } else {
      createOneSession({ email: emailField, password: passwordField })
    }
  }
  return (
    <LoginLayout
      title={say.login}
      subTitle={say.loginHeader}
      primaryButton={{ label: say.login, onClick: login }}
      secondarybutton={{ label: say.forgotPassword, onClick: () => goToExactPath("/forgot-password") }}
      tertiairyButton={{ label: say.createUser, onClick: () => goToExactPath("/signin") }}
    >
      <SocialLogins />
      <Input
        className="mb-5"
        isError={errorMessage === "userDoesntExists"}
        autoFocus={true}
        type="email"
        placeholder={say.emailPlaceholder}
        onChange={evt => setReduxState("login", { emailField: evt.target.value })}
        value={emailField}
        iconName="envelope"
        label={say.email}
        onKeyUp={evt => evt.key === "Enter" && login()}
      />
      <Input
        className="mb-5"
        isError={errorMessage === "wrongPassword"}
        placeholder={say.password}
        value={passwordField}
        type={isSownPassword ? "text" : "password"}
        onChange={evt => setReduxState("login", { passwordField: evt.target.value })}
        onKeyUp={evt => evt.key === "Enter" && login()}
        iconName="lock-alt"
        label={say.password}
      />
    </LoginLayout>
  )
}