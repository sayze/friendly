import React, { useReducer } from 'react'

const Context = React.createContext()

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [...state, action.payload]
      case 'update':
        return state.map(friend => {
          if (action.payload.id !== friend.id) {
            return friend
          }

          return { id: friend.id, ...action.payload }
        })
      case 'delete':
        return state.filter(friend => friend.id !== action.payload.id)
      default:
        return state
    }
  }, [])

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default { Context, Provider }
