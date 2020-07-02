import React from 'react'
import List from './List'
import { fakeFriends } from './utils'

export default {
  title: 'Friend/List',
  component: List,
}

export const Default = () => <List friends={fakeFriends(4)} />
