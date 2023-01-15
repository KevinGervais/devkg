import { createOneUser } from "@/api/requests"
import { Input, LoginLayout } from "@/components"
import { setReduxState, useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"
import { goToExactPath } from "@/routes"


export function SignIn(): JSX.Element {
  const {
    say,
    errorMessage,
    email,
    firstName,
    lastName,
    password,
    confirmedPassword,
    isPasswordSown
  } = useReduxState((state: ReduxState) => ({
    say: state.languages.say,
    selectedLanguage: state.languages.selectedLanguage,
    errorMessage: state.ui.snackbar?.message,
    email: state.signIn.email,
    firstName: state.signIn.firstName,
    lastName: state.signIn.lastName,
    password: state.signIn.password,
    isPasswordSown: state.signIn.isPasswordSown,
    confirmedPassword: state.signIn.confirmedPassword,
  }))

  const sendToken = () => createOneUser({
    email,
    firstName,
    lastName,
    password,
    confirmedPassword,
  }, () => {
    setReduxState("popups", { name: "ValidateNewUser" })
  })
  return (
    <LoginLayout
      title={say.createUser}
      primaryButton={{ label: say.create, onClick: sendToken }}
      secondarybutton={{ label: say.login, onClick: () => goToExactPath("/login") }}
    >
      <div className="w-full children:mb-5 col">
        <Input
          isError={(errorMessage === "missingField" && !email) || errorMessage === "userAlreadyExists"}
          autoFocus={true}
          type="email"
          iconName="envelope"
          label={say.email}
          placeholder={say.emailPlaceholder}
          onChange={evt => setReduxState("signIn", { email: evt.target.value })}
          value={email}
          onKeyUp={evt => evt.key === "Enter" && sendToken()}
        />
        <Input
          isError={errorMessage === "missingField" && !firstName}
          label={say.firstName}
          iconName="user"
          placeholder={say.firstNamePlaceholder}
          onChange={evt => setReduxState("signIn", { firstName: evt.target.value })}
          value={firstName}
          onKeyUp={evt => evt.key === "Enter" && sendToken()}
        />
        <Input
          isError={errorMessage === "missingField" && !lastName}
          label={say.lastName}
          iconName="user"
          placeholder={say.lastNamePlaceholder}
          onChange={evt => setReduxState("signIn", { lastName: evt.target.value })}
          value={lastName}
          onKeyUp={evt => evt.key === "Enter" && sendToken()}
        />
        <Input
          isError={errorMessage === "missingField" && !password}
          type={isPasswordSown ? undefined : "password"}
          label={say.password}
          placeholder="••••••••"
          iconName="lock-alt"
          onChange={evt => setReduxState("signIn", { password: evt.target.value })}
          value={password}
          onKeyUp={evt => evt.key === "Enter" && sendToken()}
        />
        <Input
          isError={errorMessage === "missingField" && !confirmedPassword}
          type={isPasswordSown ? undefined : "password"}
          label={say.confirmedNewPassword}
          placeholder="••••••••"
          iconName="lock-alt"
          onChange={evt => setReduxState("signIn", { confirmedPassword: evt.target.value })}
          value={confirmedPassword}
          onKeyUp={evt => evt.key === "Enter" && sendToken()}
        />
      </div>
    </LoginLayout>
  )
}

