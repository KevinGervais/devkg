import { html } from "shared"

import { quote } from "../components"
import { layout } from "../components/layout"
import { EmailProps } from "../model"

export const verifyEmail = ({
  say,
  token
}: EmailProps<"verifyEmail">) => layout(
  say.verifyEmailSubject,
  say.verifyEmailTemplateHeader,
  html`
  <h3>${say.verifyEmailTemplateTitle}</h3>
  <br />
  <p>${say.verifyEmailTemplateDescription}:</p>
  <br />
  ${quote(token)}
  <br />
`)