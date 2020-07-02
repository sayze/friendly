import React from 'react'
import Form from './Form'

export default {
  title: 'Friend/Form',
  component: Form,
}

export const Default = () => <Form />

export const WithName = () => <Form name="Andy Smith" />
