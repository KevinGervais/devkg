import * as events from "@/api/events"

export function launchAllEvents(): void {
  events.getCurrentUserEvent()
}