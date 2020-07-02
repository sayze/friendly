import React from 'react'
import faker from 'faker'
import List from './List'
import { Provider } from 'services/FilterContext'

export default {
  title: 'Friend/List',
  component: List,
  decorators: [storyFn => <Provider>{storyFn()}</Provider>],
}

const generateFriends = qty => {
  const friends = []
  for (let i = 0; i < qty; i++) {
    friends.push({
      id: faker.random.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      info: 'Last updated 20 minutes ago',
      img: faker.image.avatar(),
    })
  }
  return friends
}

export const Default = () => <List friends={generateFriends(6)} />
