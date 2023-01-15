

import { html } from "shared"

import { quote } from "../components"
import { layout } from "../components/layout"
import { EmailProps } from "../model"

export const updateUserEmail = ({
  email,
  oldEmail,
  token,
  say
}: EmailProps<"updateUserEmail">) => layout(
  say.changedEmailTemplateSubject,
  say.updateUserEmailTemplateTitle,
  html`
  <p>${say.updateUserEmailTemplateDescription}:</p>
  ${quote(email)}
  <br />
  <br />
  <p>${say.updateUserEmailTemplateOld}: ${oldEmail}</p>
  <br />
  <p>
    ${say.confirmationCode}: ${quote(token)}
  </p>
  ${say.verifCodeIndications}
`)