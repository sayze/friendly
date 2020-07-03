import React from 'react'
import faker from 'faker'
import Tile from './Tile'

export default {
  title: 'Friend/Tile',
  component: Tile,
}

export const Default = () => <Tile name={`${faker.name.firstName()} ${faker.name.lastName()}`} />

export const WithImage = () => (
  <Tile image={faker.image.avatar()} name={`${faker.name.firstName()} ${faker.name.lastName()}`} />
)

export const WithSubtext = () => (
  <Tile
    image={faker.image.avatar()}
    name={`${faker.name.firstName()} ${faker.name.lastName()}`}
    subtext="Last updated 4 months ago"
  />
)
