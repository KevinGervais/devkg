import { IS_CORDOVA, OS } from "@/constants"

export function getScreenDimensions(): { width: number, height: number } {
  let height = window.innerHeight
  let width = window.innerWidth

  if (window.visualViewport && window.visualViewport.width && window.visualViewport.height) {
    height = window.visualViewport.height
    width = window.visualViewport.width
  }

  if (IS_CORDOVA && OS === "ios" && window.outerHeight - height < 100) {
    height = window.outerHeight
  }
  return { width, height }
}