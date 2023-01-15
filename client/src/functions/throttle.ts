export function throttle<Args>(func: (...args: Args[]) => void, timeFrame: number): (...args: Args[]) => void {
  let lastTime: number = 0
  return (...args: Args[]) => {
    const now = new Date().getTime()
    if (now - lastTime >= timeFrame) {
      func(...args)
      lastTime = now
    }
  }
}