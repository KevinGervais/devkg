import { Popup, TextArea } from "@/components"
import { setReduxState, useReduxState } from "@/redux"

import { OKProps } from "./model"


export function Ok({ title, message, htmlMessage }: OKProps): JSX.Element {
  const say = useReduxState(state => state.languages.say)
  return (
    <Popup
      title={title}
      description={message}
      primaryButton={{
        label: say.ok,
        onClick: () => setReduxState("popups", { name: undefined })
      }}
    >
      {htmlMessage && <TextArea value={htmlMessage} isReadonly={true} />}
    </Popup>
  )
}

