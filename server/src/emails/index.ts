import { AllEmailTemplates } from "shared"

import { EmailProps } from "./model"
import * as emailTemplates from "./templates"

export const emailTemplateMap: { [key in AllEmailTemplates]: (props: EmailProps<key>) => {
  subject: string,
  htmlTemplate: string
} } = emailTemplates