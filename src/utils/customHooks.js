import { useReducer } from 'react';

export const useForceRender = () => {
  const [, forceRender] = useReducer((oldVal) => oldVal + 1, 0)
  return forceRender
}
