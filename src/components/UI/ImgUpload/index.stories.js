import React from 'react'
import ImgUpload from './index'
import faker from 'faker'

export default {
  title: 'UI/Image Upload',
  component: ImgUpload,
}

export const Default = () => <ImgUpload />

export const WithImage = () => <ImgUpload image={faker.image.avatar()} />
