import { html } from "shared"

export function quote(label: string): string {
  return html`
  <div class="inline-block rounded-md mt-2 mx-2 py-2 px-3 bg-grey-200">
    ${label}
  </div>
  `
}