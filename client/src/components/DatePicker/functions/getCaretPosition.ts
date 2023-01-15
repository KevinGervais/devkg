export function getCaretPosition(ctrl: HTMLInputElement): { start: number, end: number | null } {
  if (ctrl.selectionStart || ctrl.selectionStart === 0) {
    return {
      "start": ctrl.selectionStart,
      "end": ctrl.selectionEnd
    }
  } else {
    return {
      "start": 0,
      "end": 0
    }
  }
}