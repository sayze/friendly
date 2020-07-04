import React from 'react'
import faker from 'faker'
import Form from './Form'

export default {
  title: 'Friend/Form',
  component: Form,
}

export const Default = () => <Form />

export const WithContent = () => <Form name="Andy Smith" image={faker.image.avatar()} />
