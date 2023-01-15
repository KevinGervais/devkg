export interface ScrollbarProps {
  className?: string
  suppressScrollY?: boolean
  children: React.ReactNode
  onYReachEnd?(box: HTMLElement): void
}