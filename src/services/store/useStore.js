import { useReducer } from 'react'
import { ADD, DELETE, UPDATE } from '.'

const initialState = []

const useStore = () => {
  const [state, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case ADD:
        return [...state, ...payload]
      case UPDATE:
        return [...state, ...payload]
      case DELETE:
        return [...state, ...payload]
      default:
        return state
    }
  }, initialState)

  return [state, dispatch]
}
