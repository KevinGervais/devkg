import { useState } from "react"

import { SHORT_ID_LENGTH } from "@/shared"

import { updateOneUser } from "@/api/requests"
import { Input, Popup } from "@/components"
import { setReduxState, useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"



export function ValidateToken(): JSX.Element {
  const { say, errorMessage, isEmailToken } = useReduxState((state: ReduxState) => ({
    say: state.languages.say,
    email: state.users.currentUser?.email,
    isEmailToken: state.users.currentUser?.isEmailToken,
    errorMessage: state.ui.snackbar?.severity === "error" && state.ui.snackbar?.message
  }))
  const [tokenField, setTokenField] = useState("")
  const validateToken = () => {
    if (
      !tokenField
      || tokenField.length !== SHORT_ID_LENGTH
    ) {
      setReduxState("ui", { snackbar: { message: "missingField", severity: "error" } })
      return
    }
    updateOneUser({
      token: tokenField,
    }, () => setReduxState("popups", { name: undefined }))
  }
  const cancelToken = () => updateOneUser({
    isCancelToken: true,
  }, () => setReduxState("popups", { name: undefined }))
  return (
    <Popup
      isCloseIcon={true}
      title={isEmailToken ? say.enterConfirmationCodeEmails : say.confirmationCode}
      primaryButton={isEmailToken ? {
        label: say.save,
        onClick: validateToken
      } : undefined}
      secondaryButton={isEmailToken ? {
        label: say.resendCode,
        iconName: "redo",
        onClick: () => updateOneUser({
          isResendingToken: true,
        })
      } : undefined}
      tertiaryButton={isEmailToken ? {
        label: say.cancelChanges,
        onClick: cancelToken
      } : undefined}
    >
      {isEmailToken && (
        <Input
          isError={errorMessage && (!tokenField || tokenField.length !== SHORT_ID_LENGTH)}
          placeholder={say.enterCode}
          iconName="key"
          onChange={evt => setTokenField(evt.target.value.trim())}
          value={tokenField}
          onEnterKey={() => validateToken}
        />
      )}
    </Popup>
  )
}
