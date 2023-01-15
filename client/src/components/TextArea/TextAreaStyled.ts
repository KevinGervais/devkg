import styled from "styled-components"

import { TextAreaStyledProps } from "./model"

export const TextAreaStyled = styled.div<TextAreaStyledProps>`
  [style*="bold"] span {
    font-weight: 600;
  }
  h1 span {
    font-size: 28px !important;
  }
  h2 span {
    font-size: 24px !important;
  }
  h3 span {
    font-size: 20px !important;
  }
`