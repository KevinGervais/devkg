export function replaceInfo(str: string, obj: any): string {
  return Object.keys(obj).reduce((newStr, key) => {
    return newStr.split("${" + key + "}").join(obj[key])
  }, str)
}