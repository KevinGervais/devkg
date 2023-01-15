import { forgotPassword } from "@/api/requests"
import { Input, LoginLayout } from "@/components"
import { getReduxState, setReduxState, useReduxState } from "@/redux"
import { goToExactPath } from "@/routes"

export function ForgotPassword(): JSX.Element {
  const { say, errorMessage, emailField } = useReduxState(state => ({
    say: state.languages.say,
    errorMessage: state.ui.snackbar?.message,
    emailField: state.login.emailField,
  }))
  const forgotFn = () => forgotPassword({
    email: emailField,
    language: getReduxState().languages.selectedLanguage
  })
  return (
    <LoginLayout
      title={say.forgotPassword}
      subTitle={say.forgotPasswordHeader}
      primaryButton={{ label: say.send, onClick: forgotFn }}
      secondarybutton={{ label: say.login, onClick: () => goToExactPath("/login") }}
    >
      <Input
        className="mb-5"
        isError={errorMessage === "userDoesntExists"}
        autoFocus={true}
        type="email"
        placeholder={say.emailPlaceholder}
        iconName="envelope"
        onChange={evt => setReduxState("login", { emailField: evt.target.value })}
        value={emailField}
        label={say.email}
        onKeyUp={evt => evt.key === "Enter" && forgotFn()}
      />
    </LoginLayout>
  )
}


