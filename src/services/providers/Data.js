import React, { useReducer } from 'react'

const Context = React.createContext()

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [...state, action.payload]
      case 'edit':
        return []
      case 'delete':
        return state.filter(friend => friend.id !== action.payload.id)
      default:
        return state
    }
  }, [])

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default { Context, Provider }
