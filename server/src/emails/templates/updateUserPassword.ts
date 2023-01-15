
import { html } from "shared"

import { layout } from "../components/layout"
import { EmailProps } from "../model"

export const updateUserPassword = ({
  email,
  say
}: EmailProps<"updateUserPassword">) => layout(
  say.resetPasswordSubject,
  say.resetPasswordTemplateTitle,
  html`
  <p>${say.createUserTemplateDescription}: ${email}</p>
  <br />
`)