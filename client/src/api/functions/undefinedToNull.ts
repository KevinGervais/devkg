
export function undefinedToNull(obj: any): any {
  if (obj instanceof Array) {
    return obj.map(undefinedToNull)
  } else if (typeof obj === "object") {
    const finalObj: any = {}
    Object.keys(obj).forEach(key => {
      const data = obj[key as keyof typeof obj]
      if (data instanceof Array) {
        finalObj[key] = undefinedToNull(data)
      } else if (typeof data === "object") {
        finalObj[key] = undefinedToNull(data)
      } else if (data === undefined) {
        finalObj[key] = null
      } else {
        finalObj[key] = data
      }
    })
    return finalObj
  } else if (obj === undefined) {
    return null
  } else {
    return obj
  }
}