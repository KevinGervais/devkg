import logger from "node-color-log"
import { Args } from "shared"

import { IS_DEV } from "@/constants"
export function log(
  data: any,
  type: "log" | "info" | "warn" | "error" | "success"
): void {
  const colorMap: { [key in typeof type]: Args<typeof logger.color>[0] } = {
    log: "white",
    info: "blue",
    warn: "magenta",
    error: "red",
    success: "green"
  }
  if (IS_DEV || process.env.IS_LOGS === "true") {
    logger.color(colorMap[type])
    logger.log(data)
  }
}