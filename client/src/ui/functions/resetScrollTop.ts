import { IS_CORDOVA } from "@/constants"

export function resetScrollTop(): void {
  if (IS_CORDOVA) {
    const pageBox = window.document.querySelector(".page-box")
    if (pageBox) {
      pageBox!.scrollTop = 0
    }
  } else {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }
}