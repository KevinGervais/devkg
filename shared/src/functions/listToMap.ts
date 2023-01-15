import { IdMap } from "."

export function listToMap<Item>(list: Item[], key?: keyof Item): IdMap<Item> {
  return list.reduce((map: IdMap<Item>, item: Item) => (
    { ...map, [(item as any)[key || "_id"]]: { ...item } }
  ), {})
}
