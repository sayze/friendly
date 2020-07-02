import React from 'react'
import Modal from '.'
import { Button } from 'react-bootstrap'

export default {
  title: 'UI/Modal',
  component: Modal,
}

export const Default = () => (
  <Modal title="Perform some action" actions={<Button variant="danger">Yes, Delete</Button>} open>
    Proceed with performing some action to <strong>3</strong> records
  </Modal>
)
