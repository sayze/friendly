import React, { useReducer } from 'react'
import Modal from 'components/UI/Modal'

const Context = React.createContext()
const initialState = { open: false, title: '', content: '', onClose: () => {}, actions: null, modalProps: {} }

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'close':
        return { ...state, open: false }
      case 'open':
        return { ...action.payload, open: true }
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
