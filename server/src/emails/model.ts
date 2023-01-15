import { AllEmailTemplates, AllLanguages, KeysOfUnion, Say } from "shared"



export type TemplateContent<Content> = keyof Content extends AllEmailTemplates ? Content : never

export type EmailTemplates = TemplateContent<{
  custom: {
    subject: string
    content: string
    title: string
    email?: string
    firstName?: string
    lastName?: string
    phone?: string
  }
  verifyEmail: {
    email: string
    token: string
  }
  updateUserEmail: {
    email: string
    oldEmail: string
    token: string
  }
  createUser: {
    email: string
    firstName: string
  }
  resetUserPassword: {
    email: string
    password: string
  }
  updateUserPassword: {
    email: string
  }
}>

export type EmailProps<TemplateName extends AllEmailTemplates> = EmailTemplates[TemplateName] & { say: Say, language: AllLanguages }

type AllTemplateParamKeys = KeysOfUnion<EmailTemplates[keyof EmailTemplates]>
export type AllTemplateParams = { [key in AllTemplateParamKeys]: any }
