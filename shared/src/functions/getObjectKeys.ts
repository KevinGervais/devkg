export function getObjectKeys<Obj>(obj: Obj): (keyof Obj)[] {
  return Object.keys(obj as any) as (keyof Obj)[]
}