
import { html } from "shared"

import { footer } from "./footer"
import { head } from "./head"

export const layout = (subject: string, header: string, content: string, customStyles?: string): {
  subject: string,
  htmlTemplate: string
} => {
  return {
    subject,
    htmlTemplate: html`<!DOCTYPE html>
<html lang="en">
${head(subject, customStyles)}

<body>
  <div class="bg-white p-3 h-full">
    <div class="block max-w-screen-md my-0 mx-auto rounded-md">
      <div
        class="rounded-t-md py-3 px-5 bg-primary-500 text-2xl text-white in-b:text-xl in-b:text-white in-b:leading-tight ">
        ${header}
      </div>
      <div class="p-5 bg-grey-50">
        ${content}
      </div>
      ${footer}
    </div>
  </div>
</body>

</html>`
  }
}