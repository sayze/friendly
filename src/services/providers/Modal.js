import React, { useState } from 'react'
import Modal from 'components/UI/Modal'

const Context = React.createContext()

const Provider = ({ children, ...modalProps }) => {
  const [modal, setModal] = useState(modalProps)

  return (
    <Context.Provider value={{ ...modal, setModal }}>
      <Modal />
      {children}
    </Context.Provider>
  )
}

export default { Context, Provider }
