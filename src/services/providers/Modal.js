import React, { useState } from 'react'
import Modal from 'components/UI/Modal'

const Context = React.createContext()

const Provider = ({ children, ...modalProps }) => {
  const [props, setProps] = useState(modalProps)

  const closeModal = () => {
    setProps({ ...props, open: false })
  }

  const setModal = state => {
    setProps({ ...props, ...state })
  }

  return (
    <Context.Provider value={{ ...props, onClose: closeModal, setModal, closeModal }}>
      <Modal />
      {children}
    </Context.Provider>
  )
}

export default { Context, Provider }
