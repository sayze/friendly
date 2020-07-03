import React, { useReducer } from 'react'
import Modal from 'components/UI/Modal'

const Context = React.createContext()
const initialState = { open: false, props: { title: '', content: '', onClose: () => {} } }

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'close':
        return { ...state, open: false }
      case 'open':
        return { ...state, open: true }
      default:
        return state
    }
  }, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Modal />
      {children}
    </Context.Provider>
  )
}

export default { Context, Provider }
