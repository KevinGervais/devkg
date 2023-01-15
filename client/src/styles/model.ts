

export type Tags = "div" | "span" | "svg" | "path"
export interface ShadeEffectOptions {
  tags?: Tags[],
  isImportant?: boolean,
  isBubble?: boolean
  whiteShadeType?: "primary" | "secondary" | "grey" | "success" | "error" | "warning" | "info"
  incrementation?: [number, number]
}