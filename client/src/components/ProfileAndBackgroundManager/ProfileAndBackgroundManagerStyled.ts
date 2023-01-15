import styled from "styled-components"

import { breakpoints } from "@/ui/mixins"


export const ProfileAndBackgroundManagerStyled = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 70px;
  .background-image {
    overflow: hidden;
    position: relative;
    background-position: center;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-50);
    .fal-image {
      color: var(--secondary-200);
    }
  }
  .upload-button {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 20px;
    position: absolute;
    right: 20px;
    bottom: 20px;
    border-radius: 9999px;
    box-shadow: 0 0 3px var(--grey-500);
    span {
      display:flex;
      justify-content: center;
      align-items: center;
      top: -15px;
      right: 0;
      position: absolute;
      height: 20px;
      padding: 0 10px;
      font-size: 12px;
      border-radius: 9999px;
      backdrop-filter: blur(5px);
      background: #ffffffcc;
      box-shadow: 0 0 3px var(--grey-500);
    }
    .fa-icon {
      height: 30px;
      margin-left: 15px;
    }
  }
  .fal-image {
    height: 50px;
  }
  .profile-image {
    display:flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    left: 20px;
    bottom: 50px;
    width: 100px;
    height: 100px;
    border-radius: 9999px;
    box-shadow: 0 0 3px var(--grey-500);
    &:hover .fa-icon {
      display: flex !important;
    }
    .fa-icon {
      display:flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      &:not(.hover) &:not(.read-only) {
        color: var(--grey-900);
      }
      &.read-only {
        background-color: var(--secondary-50);
        color: var(--secondary-200);
      }
      &.hover {
        display: none;
        background: hsla(0, 0%, 100%, 0.5);
        color: var(--grey-900);
      }
      svg {
        height: 40px;
      }
    }
  }
  img {
    object-fit: cover;
  }
  @media screen and (min-width: ${breakpoints.sm}) {
    .background-image {
      border-radius: 0 0 20px 20px;
    }
}
`