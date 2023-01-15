import { AllOSTypes } from "@/shared"


function getOS(): AllOSTypes {
  const userAgent = window.navigator.userAgent
  const platform = window.navigator.platform
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"]
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"]
  const iosPlatforms = ["iPhone", "iPod"]
  if (
    platform === "iPad"
    || userAgent.match(/(iPad)/)
    || (
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2 &&
      macosPlatforms.includes(platform)
    )
  ) {
    return "ipad"
  } else if (iosPlatforms.includes(platform)) {
    return "ios"
  } else if (macosPlatforms.includes(platform)) {
    return "mac"
  } else if (windowsPlatforms.includes(platform)) {
    return "windows"
  } else if (/Android/.test(userAgent)) {
    return "android"
  } else if (/Linux/.test(platform)) {
    return "linux"
  } else {
    return "ios"
  }
}
export const OS: AllOSTypes = getOS()
// export const OS: AllOSTypes = "ios"