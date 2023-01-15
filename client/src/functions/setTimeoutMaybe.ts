export function setTimeoutMaybe(callback: () => any, time: number, isTimeout: boolean): void {
  if (isTimeout) {
    window.setTimeout(callback, time)
  } else {
    callback()
  }
}