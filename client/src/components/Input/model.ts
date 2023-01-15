export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  iconName?: string
  onIconClick?: () => void
  isError?: boolean
  children?: React.ReactNode
  onEnterKey?: () => void
  isRightIcon?: boolean
  getTabIndex?: (tabIndex?: number) => void
  label?: string
}

export interface InputStyledProps {
  isError: boolean
  isRightIcon?: boolean
}