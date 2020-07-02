import React, { useContext } from 'react'
import { Modal as UIModal } from 'react-bootstrap'
import { ModalContext } from 'services/providers'

const Modal = () => {
  const { open, onClose, title, content, actions, ...rest } = useContext(ModalContext)

  return (
    <UIModal show={open} onHide={onClose} {...rest}>
      <UIModal.Header closeButton>
        <UIModal.Title>{title}</UIModal.Title>
      </UIModal.Header>
      <UIModal.Body>{content}</UIModal.Body>
      <UIModal.Footer>{actions}</UIModal.Footer>
    </UIModal>
  )
}

export default Modal
