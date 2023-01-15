import { mkdir, writeFile } from "fs"
import { join } from "path"
import { AllEmailTemplates, AllLanguages, allLanguages, html } from "shared"

import { ALL_EMAIL_PARAMS } from "@/constants"
import { emailTemplateMap } from "@/emails"
import { getSay } from "@/functions/getSay"

import { twToInlineStyle } from "./twToInlineStyle"

export async function generateAllEmailTemplates(isDisabledInlineCss?: boolean): Promise<void> {
  await mkDirPromise(join(__dirname, `../../../emailTemplates/`))

  await Promise.all(Object.keys(allLanguages).map(async language => {
    const say = getSay(language as AllLanguages)
    await mkDirPromise(join(__dirname, `../../../emailTemplates/${language}`))

    await Promise.all(Object.keys(emailTemplateMap).map(async templateName => {

      const template = emailTemplateMap[templateName as AllEmailTemplates]
      const templateObject = template({ ...ALL_EMAIL_PARAMS, say, language } as any)

      templateObject.htmlTemplate = templateObject.htmlTemplate.replace("<body>", html`
      <body>
        <h3 class="m-5">${templateObject.subject}</h3>
      `)
      const htmlWithCss = await twToInlineStyle(templateObject.htmlTemplate)
      await writeFilePromise(
        join(__dirname, `../../../emailTemplates/${language}/${templateName}.html`),
        isDisabledInlineCss ? templateObject.htmlTemplate : htmlWithCss
      )
    }))

  }))
}

async function writeFilePromise(path: string, data: string): Promise<undefined> {
  return new Promise((resolve, reject) => {
    writeFile(path, data, "utf-8", () => {
      resolve(undefined)
    })
  })
}

async function mkDirPromise(path: string): Promise<undefined> {
  return new Promise((resolve, reject) => {
    mkdir(path, () => {
      resolve(undefined)
    })
  })
}