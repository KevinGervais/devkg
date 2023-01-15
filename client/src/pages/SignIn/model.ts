
export interface SignInState {
  email: string,
  firstName: string,
  lastName: string,
  password: string
  confirmedPassword: string
  isPasswordSown: boolean
}

export interface SelectAvatarProps {
  index: number
  onChange: (index: number) => void
}