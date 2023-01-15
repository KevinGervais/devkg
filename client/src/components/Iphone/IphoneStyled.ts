import styled, { css } from "styled-components"

import { breakpoints } from "@/ui/mixins"

import { IphoneStyledProps } from "./model"

const editSize = (width: string, commerce: number) => `
  ${Number(width.split(/(px|vw|rem|vh)/)[0]) * commerce}${width.split(/(px|vw|rem|vh)/)[1]}
`
export const IphoneStyled = styled.div<IphoneStyledProps> `
  position: relative;
  width: ${(props: IphoneStyledProps) => props.width};
  max-width: ${(props: IphoneStyledProps) => props.maxWidth};
  height: ${(props: IphoneStyledProps) => editSize(props.width, 2.006339144)};
  max-height: ${(props: IphoneStyledProps) => editSize(props.maxWidth, 2.006339144)};

  img:first-child {
    z-index: 3;
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props: IphoneStyledProps) => props.width};
    max-width: ${(props: IphoneStyledProps) => props.maxWidth};
    height: ${(props: IphoneStyledProps) => editSize(props.width, 2.006339144)};
    max-height: ${(props: IphoneStyledProps) => editSize(props.maxWidth, 2.006339144)};
  }
  ${(props: IphoneStyledProps) => props.isSplited && css`
    user-select: none;
    cursor: pointer;
    cursor: grabbing;
  `}
  img:not(:first-child) {
    z-index: 2;
    position: absolute;
    left: min(${(props: IphoneStyledProps) => editSize(props.width, 0.065)}, ${(props: IphoneStyledProps) => editSize(props.maxWidth, 0.065)});
    top: min(${(props: IphoneStyledProps) => editSize(props.width, 0.06)}, ${(props: IphoneStyledProps) => editSize(props.maxWidth, 0.06)});
    width: min(${(props: IphoneStyledProps) => editSize(props.width, 0.87)}, ${(props: IphoneStyledProps) => editSize(props.maxWidth, 0.87)});
  }
  img:nth-child(3) {
    clip-path: ${(props: IphoneStyledProps) => `polygon(0% 0%, ${props.clipPosition}% 0%, ${props.clipPosition < 10 ? 0 : props.clipPosition - 10}% 100%, 0% 100%)`}
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    width: ${(props: IphoneStyledProps) => props.portraitWidth};
    height: ${(props: IphoneStyledProps) => editSize(props.portraitWidth, 2.006339144)};
    img:first-child {
      width: ${(props: IphoneStyledProps) => props.portraitWidth};
      height: ${(props: IphoneStyledProps) => editSize(props.portraitWidth, 2.006339144)};
    }
    img:not(:first-child) {
      z-index: 2;
      position: absolute;
      left: min(${(props: IphoneStyledProps) => editSize(props.portraitWidth, 0.065)}, ${(props: IphoneStyledProps) => editSize(props.maxWidth, 0.065)});
      top: min(${(props: IphoneStyledProps) => editSize(props.portraitWidth, 0.06)}, ${(props: IphoneStyledProps) => editSize(props.maxWidth, 0.06)});
      width: min(${(props: IphoneStyledProps) => editSize(props.portraitWidth, 0.87)}, ${(props: IphoneStyledProps) => editSize(props.maxWidth, 0.87)});
    }
  }
`