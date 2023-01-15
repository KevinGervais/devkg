import styled from "styled-components"

import { breakpoints } from "@/ui/mixins"

export const FooterStyled = styled.div`
  .top-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    display: flex;
    align-items: center;
  }
   a, p, .modal-button {
    line-height: 200%;
    text-align: center;
    color: var(--grey-500);
  }
  h3 {
    text-align: center;
    color: var(--secondary-800);
  }
  p {
    max-width: 75%;
    line-height: 150%;
  }
  a:hover, .modal-button:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .download {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    flex: 1;
    & > div {
      margin-left: 10px;
      margin-right: 10px;
      &:first-child {
        margin-bottom: 10px;
      }
    }
  }
  .bottom-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    margin-top: 40px;
    border-top: 1px solid var(--grey-300);
    span {
      color: var(--grey-500);
      flex: 1;
      margin-bottom: 15px;
    }
    .icons {
      display: flex;
    }
    .fa-icon {
      width: 40px;
      height: 40px;
      border: 1px solid var(--grey-300);
      border-radius: 9999px;
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
    svg {
      color: var(--secondary-800);
      height: 20px;
    }
  }
  @media screen and (min-width: ${breakpoints.sm}) {
    margin: 0 60px;
    .bottom-content {
      flex-direction: row;
      span {
        margin-bottom: 0;
      }
    }
  }
  @media screen and (min-width: ${breakpoints.md}) {
    .top-content {
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      flex: 1;
    }
    section {
      align-items: flex-start;
    }
    h3, a, p, .modal-button {
      text-align: left;
    }
    .download {
      flex-direction: row;
      flex: none;
      & > div {
      margin-left: 0;
      margin-right: 0;
      &:first-child {
        margin-right: 20px;
        margin-bottom: 0;
      }
    }
    }
    h3 {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    margin: 0 100px;
  }
`