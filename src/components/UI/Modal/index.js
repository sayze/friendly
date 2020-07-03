import React, { useContext } from 'react'
import { Modal as UIModal } from 'react-bootstrap'
import { ModalContext } from 'services/providers'

const Modal = () => {
  const { state, dispatch } = useContext(ModalContext)

  return (
    <UIModal
      show={state.open}
      onHide={() => {
        dispatch({ type: 'close' })
      }}
    >
      <UIModal.Header closeButton>
        <UIModal.Title>{state.title}</UIModal.Title>
      </UIModal.Header>
      <UIModal.Body>{state.content}</UIModal.Body>
      <UIModal.Footer>{state.actions}</UIModal.Footer>
    </UIModal>
  )
}

export default Modal
