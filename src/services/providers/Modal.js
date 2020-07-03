import React, { useReducer } from 'react'
import Modal from 'components/UI/Modal'

const Context = React.createContext()
const initialState = {
  title: '',
  content: '',
  actions: null,
  modalProps: { backdrop: 'static', onHide: () => {}, show: false, keyboard: false },
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'show':
        return { ...action.payload, modalProps: { ...state.modalProps, show: true } }
      case 'hide':
        return { ...state, modalProps: { ...state.modalProps, show: false } }
      default:
        return initialState
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
