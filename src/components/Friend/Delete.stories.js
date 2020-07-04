import React from 'react'
import Delete from './Delete'

export default {
  title: 'Friend/Delete',
  component: Delete,
}

export const Default = () => <Delete friend={{ id: 1, name: 'John Smith' }} />
