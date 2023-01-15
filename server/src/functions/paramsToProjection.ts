export function paramsToProjection<Param, ParamList extends Param[]>(
  params: Param[] | undefined
): (
    ParamList[number] extends string ? { projection: { [key in ParamList[number]]: { $ifNull: [`$${key}`, undefined] } } } | undefined : never
  ) {
  if (params) {
    const projection = params.reduce((proj: any, param: any) => (
      {
        ...proj,
        [param]: { $ifNull: [`$${param}`, undefined] }
      }
    ), {})
    return {
      projection
    } as any
  }
  return undefined as any
}