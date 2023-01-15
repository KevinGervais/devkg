import forge from "node-forge"

import { LONG_ID_LENGTH } from ".."
export function getAESKey(isLong?: boolean): string {
  return forge.random.getBytesSync(isLong ? LONG_ID_LENGTH : 48)
}