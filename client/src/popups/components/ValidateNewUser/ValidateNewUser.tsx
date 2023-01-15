import { useState } from "react"

import { SHORT_ID_LENGTH } from "@/shared"

import { createOneUser } from "@/api/requests"
import { Input, Popup } from "@/components"
import { setReduxState, useReduxState } from "@/redux"


export function ValidateNewUser(): JSX.Element {
  const {
    say,
    errorMessage,
    email,
    firstName,
    lastName,
    password,
    confirmedPassword,
  } = useReduxState(state => ({
    say: state.languages.say,
    errorMessage: state.ui.snackbar?.severity === "error" && state.ui.snackbar?.message,
    email: state.signIn.email,
    firstName: state.signIn.firstName,
    lastName: state.signIn.lastName,
    password: state.signIn.password,
    confirmedPassword: state.signIn.confirmedPassword,
  }))

  const [tokenField, setTokenField] = useState("")
  const resendToken = () => {
    createOneUser({
      email,
      firstName,
      lastName,
      password,
      confirmedPassword,
    }, () => {
      setReduxState("ui", { snackbar: { message: "verifCodeSent", severity: "success" } })
    })
  }
  const createAccount = () => {
    createOneUser({
      email,
      firstName,
      lastName,
      password,
      confirmedPassword,
      token: tokenField
    })
  }
  return (
    <Popup
      isCloseIcon={true}
      title={say.enterConfirmationCode}
      primaryButton={{
        label: say.validate,
        onClick: createAccount
      }}
      secondaryButton={{
        label: say.resendCode,
        onClick: resendToken,
        iconName: "redo"
      }}
    >
      <Input
        isError={errorMessage && (!tokenField || tokenField.length !== SHORT_ID_LENGTH)}
        placeholder={say.enterCode}
        onChange={evt => setTokenField(evt.target.value.trim())}
        value={tokenField}
        onEnterKey={createAccount}
      />
    </Popup>
  )
}