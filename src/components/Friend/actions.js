import { Form } from './index'
import { Button } from 'react-bootstrap'
import React from 'react'

export const ADD_FRIEND = {
  open: true,
  title: 'Add new friend',
  content: <Form />,
  actions: <Button variant="success">Save Friend</Button>,
}
