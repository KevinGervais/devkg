import styled from "styled-components"

export const DayPickerStyled = styled.div<{}>`
  .DayPicker {
    background: white;
    border-radius: 30px;
    box-shadow: 0 0 10px var(--grey-200);
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--start),
  .DayPicker-Day--selected:not(.DayPicker-Day--end),
  .DayPicker-Day--selected:not(.DayPicker-Day--outside) {
    background-color: var(--secondary-50) !important;
    color: var(--secondary-500) !important;
  }
  .DayPicker-Day--today {
    color: var(--primary-500) !important;
  }
  .DayPicker-Day--disabled {
    color: var(--grey-300);
    &.DayPicker-Day--today {
      color: var(--primary-200) !important;
    }
  }
  .DayPicker-Day--reserved:not(.DayPicker-Day--before) {
    text-decoration: line-through;
  }
  .DayPicker-Day {
    border-radius: 0 !important;
  }
  .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .DayPicker-Day--before {
    cursor: initial;
    color: var(--grey-300);
  }
  .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  && .DayPicker-Day--end, && .DayPicker-Day--start {
    background-color: var(--primary-500);
    color: white !important;
  }
`