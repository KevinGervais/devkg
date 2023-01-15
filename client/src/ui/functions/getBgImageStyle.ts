export function getBgImageStyle(name: string): {
  backgroundImage: string
} {
  return { backgroundImage: `url("./images/${name}")` }
}