import React from "react"

import { Icon } from "@/components"
import { useReduxState } from "@/redux"
import { ReduxState } from "@/redux/model"
import { PageTw } from "@/styles/PageTw"

import { NotFoundStyled } from "./NotFoundStyled"

export function NotFound(): JSX.Element {
  const { say } = useReduxState((state: ReduxState) => ({
    say: state.languages.say,
  }))
  return (
    <div className={PageTw}>
      <NotFoundStyled>
        <h2>{say.pageNotFound}</h2>
        <Icon name="frown" />
      </NotFoundStyled>
    </div>
  )
}



