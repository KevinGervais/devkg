import inlineCss from "inline-css"
export async function twToInlineStyle(str: string): Promise<string> {
  str = await inlineCss(str, { url: " " })
  str = str
    .replace(/--([a-zA-Z0-9-])+: ?([a-zA-Z0-9-;# ])*;/g, "")
    .replace(/ +/g, " ")
    .replace(/class="([-a-zA-Z0-9 :\[\]%])*"/g, "")
    .split("var(--tw-bg-opacity)")
    .join("1")
    .split("var(--tw-text-opacity)")
    .join("1")
    .split("var(--tw-border-opacity)")
    .join("1")
    .split(`style=" border: 0 solid; box-sizing: border-box;"`)
    .join("")
    .split(`style=" `)
    .join(`style="`)
    .split("-webkit-text-size-adjust: 100%;")
    .join("")
    .split("/1)")
    .join(")")
  const match = Array.from(str.match(/rgb\([0-9 ]*\)/g)!).map(color => color.split(" ").join(", "))
  str = str.split(/rgb\([0-9 ]*\)/).map((item, index) => item + (match[index] || "")).join("")

  return str
}