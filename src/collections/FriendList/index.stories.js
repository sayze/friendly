import React from 'react'
import faker from 'faker'
import FriendList from '.'

export default {
  title: 'Friend List',
  component: FriendList,
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

export const Default = () => <FriendList friends={generateFriends(6)} />
