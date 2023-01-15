import { log } from "./log"

export function handleRoutine(hoursInterval: number, minutesDelay: number, callback: () => Promise<any>): void {
  const finalCallback = () => callback().catch(err => log(err, "error"))
  setTimeout(() => {
    finalCallback().catch(() => null)
    setInterval(finalCallback, hoursInterval * 60 * 60 * 1000)
  }, minutesDelay * 60 * 1000)
}