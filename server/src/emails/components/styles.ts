import { readFileSync } from "fs"
import { html } from "shared"
const buildedCss = readFileSync("./src/emails/build.css", { encoding: "utf-8" })

export const styles = (customStyles?: string) => html`<style>
  ${buildedCss}
  ${customStyles ? customStyles.replace("<style>", "").replace("</style>", "") : ""}
</style>`