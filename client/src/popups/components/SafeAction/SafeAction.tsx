import { useState } from "react"

import { Button, Popup } from "@/components"
import { setReduxState, useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"

import { SafeActionProps } from "./model"

export function SafeAction({
  action,
  buttonName,
  description,
  Component,
  title,
  isFiveClickDisabled
}: SafeActionProps): JSX.Element {
  const [pressCount, setPressCount] = useState(5)
  const { say, } = useReduxState((state: ReduxState) => ({
    say: state.languages.say,
  }))
  return (
    <Popup
      title={title}
      closeButtonType="cancel"
      primaryButton={{
        label: say[buttonName || "yes"],
        onClick: () => {
          if (pressCount !== 0 && !isFiveClickDisabled) {
            setReduxState("ui", {
              snackbar: {
                message: "pressButton5Times",
                severity: "error"
              }
            })
            return
          } else {
            action()
            setReduxState("popups", { name: undefined, props: undefined })
          }
        }
      }}
    >
      <div className="mb-5">
        {description && <h4>{description}</h4>}
        {Component && <Component />}
        {!isFiveClickDisabled && pressCount > 0 && (
          <Button
            color="primary"
            variant="contained"
            onClick={() => setPressCount(pressCount - 1)}
          >
            {say.pressMe(pressCount)}
          </Button>
        )}
      </div>
    </Popup>
  )
}
