
export function filterProperties<
  Item,
  Params extends (keyof Item)[]
>(item: Item, params: Params): Pick<Item, Params[number]> {
  const finalItem: Partial<Item> = {}
  Object.keys(item!).forEach(key => {
    if ((params as string[]).includes(key)) {
      finalItem[key as keyof Item] = item[key as keyof Item]
    }
  })
  return finalItem as Pick<Item, Params[number]>
}