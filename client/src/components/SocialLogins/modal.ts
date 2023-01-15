import { Provider } from "react-social-login"

import { Say } from "@/shared"

export interface SocialLoginButtonProps {
  triggerLogin: () => void
  brand: Provider
  say: Say
  className?: string
}