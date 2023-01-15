import styled, { css } from "styled-components"

import { IS_DESKTOP } from "@/constants"
import { OS } from "@/constants/OS"
import { getNotch } from "@/ui/mixins"

export const TitleBarStyled = styled.div<{}>`
  -webkit-app-region: drag;
  @media screen and (orientation:portrait) {
    ${() => !IS_DESKTOP && css`
      height: ${getNotch("top")};
    `}
  }
  @media screen and (orientation:landscape) {
      ${() => OS === "ipad" && css`
      height: ${getNotch("top")};
    `}
    ${() => !IS_DESKTOP && OS !== "ipad" && css`
      display: none;
    `}
  }
`
