import { Store } from "redux"

let store: Store | undefined
export function getOrSetStore<Args extends (
  []
  | [Store]
)>(
  ...args: Args
): Args[0] extends undefined ? Store : Args[0] extends Store ? void : void {
  if (args[0]) {
    store = args[0]
    return undefined as any
  } else {
    return store || {} as any
  }
}