import { OS } from "./OS"

export const IS_DESKTOP = (OS === "mac" || OS === "linux" || OS === "windows")
