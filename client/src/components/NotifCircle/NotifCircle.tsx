import { tw } from "@/shared"

export function NotifCircle({ onNotifClick, className }: { onNotifClick?: () => void, className?: string }): JSX.Element | null {
  return (
    <div className={tw`${className} absolute -top-2 -right-2 center circle-6`} onClick={onNotifClick}>
      <div className="absolute z-10 circle-3 bg-primary-500" />
      <div className="absolute animate-ping circle-3 bg-primary-200" />
    </div>
  )
}