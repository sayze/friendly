import { faker } from '@faker-js/faker'
import ImgUpload from './index'

export default {
  title: 'UI/Image Upload',
  component: ImgUpload,
  argTypes: {
    readOnly: { control: 'boolean' },
  },
}

export const Default = {
  args: { readOnly: false },
}

export const WithImage = {
  args: { readOnly: false, image: faker.image.avatar() },
}
