export function formatPrice(price: number): string {
  const priceStr = price.toFixed(2)
  const [int, digits] = price.toFixed(2).split(".")
  if (digits === "00") {
    return int!
  } else {
    return priceStr
  }
}

