
import { layout } from "../components/layout"
import { EmailProps } from "../model"

export const custom = ({
  subject,
  title,
  content,
  say,
}: EmailProps<"custom">) => layout(
  subject,
  title,
  content
)