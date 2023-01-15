import { useReducer } from "react"

export function useStates<Type>(initState: Type): [
  Type,
  (newState: Partial<Type>) => void
] {
  const [state, dispatch] = useReducer<(oldState: Type, newState: Partial<Type>) => Type>((oldState, newState) => {
    return { ...oldState, ...newState }
  }, initState)
  return [
    state,
    (newState: Partial<Type>) => dispatch(newState)
  ]
}