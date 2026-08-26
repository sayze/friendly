import { faker } from '@faker-js/faker'
import Tile from './Tile'

export default {
  title: 'Friend/Tile',
  component: Tile,
}

export const Default = () => <Tile name={`${faker.person.firstName()} ${faker.person.lastName()}`} />

export const WithImage = () => (
  <Tile image={faker.image.avatar()} name={`${faker.person.firstName()} ${faker.person.lastName()}`} />
)

export const WithSubtext = () => (
  <Tile
    image={faker.image.avatar()}
    name={`${faker.person.firstName()} ${faker.person.lastName()}`}
    subtext="Last updated 4 months ago"
  />
)
