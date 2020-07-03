import React from 'react'
import ImgUpload from './index'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import faker from 'faker'

export default {
  title: 'UI/Image Upload',
  component: ImgUpload,
  decorators: [withKnobs],
}

export const Default = () => <ImgUpload readOnly={boolean('Read Only', false)} />

export const WithImage = () => <ImgUpload readOnly={boolean('Read Only', false)} image={faker.image.avatar()} />
