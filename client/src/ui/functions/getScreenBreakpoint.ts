import { breakpoints } from "../mixins"
import { Breakpoints } from "../model"

export function getScreenBreakpoint(): Breakpoints {
  const [sm, md, lg, xl] = Object.keys(breakpoints).map((breakpointName: string) => (
    Number(breakpoints[breakpointName as keyof typeof breakpoints].replace("px", ""))
  )) as [number, number, number, number]
  if (window.innerWidth < sm) {
    return "xm"
  } else if (window.innerWidth >= sm && window.innerWidth < md) {
    return "sm"
  } else if (window.innerWidth >= md && window.innerWidth < lg) {
    return "md"
  } else if (window.innerWidth >= lg && window.innerWidth < xl) {
    return "lg"
  } else {
    return "xl"
  }

}