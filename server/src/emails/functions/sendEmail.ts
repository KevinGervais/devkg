import nodemailer, { SendMailOptions } from "nodemailer"
import { AllEmailTemplates, AllLanguages } from "shared"

import { emailTemplateMap } from "@/emails"
import { EmailTemplates } from "@/emails/model"

import { getSay } from "../../functions/getSay"
import { simplifyQuery } from "../../functions/simplifyQuery"
import { twToInlineStyle } from "./twToInlineStyle"


export async function sendEmail<TemplateName extends AllEmailTemplates>(
  email: string,
  language: AllLanguages,
  name: TemplateName,
  params: EmailTemplates[TemplateName],
): Promise<unknown> {
  const say = getSay(language)
  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 587,
    secure: false,
    auth: {
      user: "notify@gocook.ca",
      pass: "Isl@m132435"
    }
  })
  const { htmlTemplate, subject } = emailTemplateMap[name]({ ...params, say, language } as any)
  const htmlWithCss = await twToInlineStyle(htmlTemplate)
  const query: SendMailOptions = simplifyQuery({
    from: "KevinGervais <notify@gocook.ca>",
    to: email,
    subject,
    html: htmlWithCss
  })
  return sendMail(transporter, query)
}

function sendMail(transporter: any, mailOptions: any): Promise<undefined> {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error: any) => {
      if (error) {
        reject(error)
      }
      else {
        resolve(undefined)
      }
    })
  })
}