import { useReducer } from 'react'
import { ADD_FRIEND, DELETE_FRIEND, UPDATE_FRIEND, SET_FRIENDS, SET_ERROR } from '.'

const useStore = (loading = false, data = [], error = {}) => {
  const [state, dispatch] = useReducer(
    (state, { type, payload }) => {
      switch (type) {
        case SET_ERROR:
          return { ...state, loading: false, error: payload }
        case SET_FRIENDS:
          return { ...state, data: payload, loading: false, error: {} }
        case ADD_FRIEND:
          return { ...state, data: [...state.data, { ...payload }], error: {} }
        case UPDATE_FRIEND:
          return {
            ...state,
            data: state.data.map(friend => {
              if (payload.id !== friend.id) {
                return friend
              }
              return { id: friend.id, ...payload }
            }),
            error: {},
          }
        case DELETE_FRIEND:
          return { ...state, data: state.data.filter(friend => friend.id !== payload.id), error: {} }
        default:
          return state
      }
    },
    { loading, data, error },
  )

  return [state, dispatch]
}

export default useStore
