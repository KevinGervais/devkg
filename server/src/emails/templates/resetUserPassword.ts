
import { html } from "shared"

import { quote } from "../components"
import { layout } from "../components/layout"
import { EmailProps } from "../model"

export const resetUserPassword = ({
  email,
  password,
  say
}: EmailProps<"resetUserPassword">) => layout(
  say.resetPasswordSubject,
  say.resetPasswordTemplateTitle,
  html`
  <p>${say.createUserTemplateDescription}:</p>
  ${quote(email)}
  <br />
  <br />
  <p>
    ${say.temporaryPassword}:
  </p>
  ${quote(password)}
`)