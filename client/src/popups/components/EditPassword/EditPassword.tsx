
import { updateUserPassword } from "@/api/requests"
import { Input, Popup } from "@/components"
import { setReduxState, useReduxState, useStates } from "@/redux"
import { ReduxState } from "@/redux/model"


export function EditPassword(): JSX.Element {
  const { say, errorMessage } = useReduxState((state: ReduxState) => ({
    say: state.languages.say,
    errorMessage: state.ui.snackbar?.severity === "error" && state.ui.snackbar?.message,
  }))
  const [{
    oldPasswordField,
    newPasswordField,
    ConfirmedPasswordField,
  }, setState] = useStates({
    oldPasswordField: "",
    newPasswordField: "",
    ConfirmedPasswordField: "",
  })
  const updatePassword = () => {
    updateUserPassword(oldPasswordField, newPasswordField, ConfirmedPasswordField)
  }
  return (
    <Popup
      isCloseIcon={true}
      title={say.editPassword}
      description={say.passwordProperties}
      primaryButton={{
        label: say.save,
        onClick: updatePassword
      }}
      secondaryButton={{
        label: say.cancel,
        onClick: () => setReduxState("popups", { name: undefined })
      }}
    >
      <Input
        isError={errorMessage === "wrongPassword"}
        type="password"
        placeholder={say.oldPassword}
        onChange={evt => setState({ oldPasswordField: evt.target.value })}
        value={oldPasswordField}
      />
      <Input
        isError={errorMessage === "passwordNotMatching"}
        type="password"
        placeholder={say.newPassword}
        onChange={evt => setState({ newPasswordField: evt.target.value })}
        value={newPasswordField}
      />
      <Input
        isError={errorMessage === "passwordNotMatching"}
        type="password"
        placeholder={say.confirmedNewPassword}
        onEnterKey={updatePassword}
        onChange={evt => setState({ ConfirmedPasswordField: evt.target.value })}
        value={ConfirmedPasswordField}
      />
    </Popup>
  )
}
