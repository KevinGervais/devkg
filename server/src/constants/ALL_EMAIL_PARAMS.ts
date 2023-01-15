import dayjs from "dayjs"
import { generateId, html } from "shared"

import { AllTemplateParams } from "@/emails/model"

const in10Days = dayjs()
in10Days.add(10, "days")

export const ALL_EMAIL_PARAMS: AllTemplateParams = {
  subject: "custom subject",
  email: "john@doe.com",
  oldEmail: "john.doe@doe.com",
  firstName: "John",
  lastName: "Doe",
  password: "qwtr45tg",
  token: generateId(8),
  content: html`
  <p>custom content</p>
  <ol>
    <li>salade</li>
    <li>tomate</li>
    <li><b>brocoli</b></li>
  </ol>
  `,
  title: html`custom title`,
  phone: "514-876-5434",
}