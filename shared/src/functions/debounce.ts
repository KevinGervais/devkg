export function debounce<Args, Return>(func: (...args: Args[]) => Promise<Return>, timeFrame: number): (...args: Args[]) => Promise<Return> {
  let timeoutId: any = -1
  return (...args) => {
    return new Promise<Return>((resolve, reject) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args).then(data => resolve(data)).catch(data => reject(data))
      }, timeFrame)
    })
  }
}