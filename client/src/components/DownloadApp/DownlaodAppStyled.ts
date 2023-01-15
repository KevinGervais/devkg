import styled from "styled-components"


export const DownloadAppStyled = styled.div`
  display: flex;
  align-items: center;
  background: var(--grey-900);
  width: max-content;
  height: max-content;
  padding: 8px 14px;
  border-radius: 8px;
  svg {
    color: white;
  }
  svg, img {
    height: 30px;
    margin-right: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    color: var(--grey-300);
    font-size: 13px;
    margin-bottom: 2px;
  }
  h4 {
    color: white;
    font-size: 18px;
  }
`