import { LANGUAGE_LIST } from "@/shared"

import { setReduxState, useReduxState } from "@/redux"

import { Button, Select } from ".."
// tslint:disable-next-line:no-var-requires
const Fade = require("react-reveal/Fade")
export function Nav(): JSX.Element {
  const { say } = useReduxState(state => ({
    say: state.languages.say
  }))
  return (
    <div className="fixed top-0 left-0 w-full z-[100000] h-[60px] bg-primary-800 flex items-center justify-end px-3">
      <Fade right={true}>
        <Select
          isStyleDisabled={true}
          dropdownProps={{
            isRightPosition: true,
            optionList: [...LANGUAGE_LIST],
            outputMap: lang => say[lang],
            onChange: value => setReduxState("languages", { selectedLanguage: value })
          }}
        >
          <Button
            className="ml-3"
            isCircle={true}
            iconName="globe-americas"
            shade={500}
          />
        </Select>
      </Fade>
    </div>
  )
}