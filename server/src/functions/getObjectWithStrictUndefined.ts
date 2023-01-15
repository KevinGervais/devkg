export function getObjectWithStrictUndefined(objOrArray: any | any[]): any {
  if (objOrArray instanceof Array) {
    return objOrArray.map(item => subFn(item))
  } else if (objOrArray === undefined) {
    return undefined
  } else {
    return subFn(objOrArray)
  }

}

function subFn(obj: any): any {
  const newObj: any = {}
  Object.keys(obj).forEach(key => {
    if (obj[key] === null) {
      newObj[key] = undefined
    } else {
      newObj[key] = obj[key]
    }
  })
  return newObj
}