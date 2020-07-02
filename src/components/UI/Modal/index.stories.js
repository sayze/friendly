import React from 'react'
import Modal from '.'
import { Button } from 'react-bootstrap'
import { ModalProvider } from 'services/providers'

export default {
  title: 'UI/Modal',
  component: Modal,
}

export const Default = () => (
  <ModalProvider
    title="Perform some action"
    actions={<Button variant="danger">Yes, Delete</Button>}
    content={
      <span>
        Proceed with performing some action to <strong>3</strong> records
      </span>
    }
    open
  ></ModalProvider>
)

export const LargeModal = () => (
  <ModalProvider
    open
    title="Create new entry"
    size="lg"
    actions={<Button variant="success">Yes, Delete</Button>}
    content={<span>Large, idealy used for performing operations that require input</span>}
  ></ModalProvider>
)
