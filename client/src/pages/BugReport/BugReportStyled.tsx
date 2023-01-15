import styled from "styled-components"


import { BugReportStyledProps } from "./model"

export const BugReportStyled = styled.div<BugReportStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${(props: BugReportStyledProps) => props.vh ? `${props.vh - 60}px` : "calc(100vh - 60px)"};
  .bug-item {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    width: calc(100% - 40px);
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
    box-shadow: 0 5px 10px var(--grey-200);
    & > .fa-icon {
      display:flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      height: 40px;
      width: 40px;
      border-radius: 9999px;
      color: white;
      svg {
        height: 20px;
      }
    }
  }
  .padding {
    height: 20px;
    width: 100%;
    flex-shrink: 0;
  }
  .textarea {
    background: var(--grey-100);
    padding: 20px;
    margin-bottom: 20px;
  }

  .scrollbar-box > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`
