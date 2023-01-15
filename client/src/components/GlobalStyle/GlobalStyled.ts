import { createGlobalStyle, css } from "styled-components"

import { IS_CORDOVA } from "@/constants"

import { GlobalStyledProps } from "./model"

export const GlobalStyled = createGlobalStyle<GlobalStyledProps>`
${() => !IS_CORDOVA && css`
html {
    overflow: hidden;
    height: 100vh;
  }
  body {
    overflow: hidden;
    height: 100%;
  }
  #root {
    overflow: auto;
    height: 100%;
  }
`}
${(props: GlobalStyledProps) => IS_CORDOVA && css`
  html, body, #root, .app-root {
    overflow: hidden;
    width: ${props.vw ? `${props.vw}px` : "100vw"};
    height: ${props.vh ? `${props.vh}px` : "100vh"};
    min-height: ${props.vh ? `${props.vh}px` : "100vh"};
    max-height: ${props.vh ? `${props.vh}px` : "100vh"};
  }
`}
${() => !IS_CORDOVA && css`
  html {
    min-height: 100vh;
  }
`}

`