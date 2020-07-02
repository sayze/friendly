import React from 'react'
import List from './List'
import { FilterProvider } from 'services/providers'
import { fakeFriends } from './utils'

export default {
  title: 'Friend/List',
  component: List,
  decorators: [storyFn => <FilterProvider>{storyFn()}</FilterProvider>],
}

export const Default = () => <List friends={fakeFriends(4)} />
