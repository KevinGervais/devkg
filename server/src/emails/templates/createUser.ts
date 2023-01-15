import { html } from "shared"

import { quote } from "../components"
import { layout } from "../components/layout"
import { EmailProps } from "../model"

export const createUser = ({
  email,
  say,
  firstName
}: EmailProps<"createUser">) => layout(
  say.createUserSubject,
  say.createUserTemplateHeader(firstName),
  html`
  <h3><b>${say.createUserTemplateTitle}</b></h3>
  <br />
  <p>${say.createUserTemplateDescription}:</p>
  ${quote(email)}
  <br />
  <br />
`)