import { useReducer } from 'react'
import { ADD_FRIEND, DELETE_FRIEND, UPDATE_FRIEND } from '.'

const useStore = (loading = false, data = []) => {
  const [state, dispatch] = useReducer(
    (state, { type, payload }) => {
      switch (type) {
        case ADD_FRIEND:
          return { ...state, data: [...state.data, { ...payload }] }
        case UPDATE_FRIEND:
          return {
            ...state,
            data: state.data.map(friend => {
              if (payload.id !== friend.id) {
                return friend
              }
              return { id: friend.id, ...payload }
            }),
          }
        case DELETE_FRIEND:
          return { ...state, data: state.data.filter(friend => friend.id !== payload.id) }
        default:
          return state
      }
    },
    { loading, data },
  )

  return [state, dispatch]
}

export default useStore
