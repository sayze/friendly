import React from 'react'
import { Modal as UIModal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Modal = ({ open, onClose, title, children, actions }) => (
  <UIModal show={open} onHide={onClose}>
    <UIModal.Header closeButton>
      <UIModal.Title>{title}</UIModal.Title>
    </UIModal.Header>
    <UIModal.Body>{children}</UIModal.Body>
    <UIModal.Footer>{actions}</UIModal.Footer>
  </UIModal>
)

Modal.defaultProps = {
  open: false,
  onClose: () => {},
  children: null,
  actions: null,
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  actions: PropTypes.node,
}

export default Modal
