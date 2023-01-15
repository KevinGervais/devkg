import { setReduxState } from "@/redux"

export function isMissingField(...args: boolean[]): boolean {
  if (args.includes(true)) {
    setReduxState("ui", { snackbar: { message: "missingField", severity: "error" } }, () => {
      window.document.querySelector(".Mui-error")?.scrollIntoView({ behavior: "smooth" })
    })
    return true
  } else {
    return false
  }
}