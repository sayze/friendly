import React from 'react'
import faker from 'faker'
import Tile from './Tile'

export default {
  title: 'Friend',
  component: Tile,
}

export const FriendTile = () => (
  <Tile
    image={faker.image.avatar()}
    name={`${faker.name.firstName()} ${faker.name.lastName()}`}
    subtext="Last updated 4 months ago"
  />
)
