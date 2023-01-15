
export function nullToUndefined(obj: any): any {
  if (obj === null) {
    return undefined
  } else if (obj instanceof Array) {
    return obj.map(nullToUndefined)
  } else if (typeof obj === "object") {
    const finalObj: any = {}
    Object.keys(obj).forEach(key => {
      const data = obj[key as keyof typeof obj]
      if (data === null) {
        finalObj[key] = undefined
      } else if (data instanceof Array) {
        finalObj[key] = nullToUndefined(data)
      } else if (typeof data === "object") {
        finalObj[key] = nullToUndefined(data)
      } else {
        finalObj[key] = data
      }
    })
    return finalObj
  } else {
    return obj
  }
}