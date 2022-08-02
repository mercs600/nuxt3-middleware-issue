import { useState } from '#app'

const useSomeLazyData = () => {
  return new Promise(resolve => resolve({ data: true }))
}

export const useExampleState = () => {
  const exampleState = useState('example:state', () => ({ data: true }))
  return exampleState
}

export const useExample = async () => {
  const exampleState = useExampleState()
  const data = await useSomeLazyData()
  exampleState.value = data
  return exampleState
}

export const useExampleState2 = () => {
  const exampleState = useState('example:state2', () => ({ data: true }))
  return exampleState
}
export const useExample2 = async () => {
  const exampleState = useExampleState2()
  const data = await useSomeLazyData()
  exampleState.value = data
  return exampleState
}
