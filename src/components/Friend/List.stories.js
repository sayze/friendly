import React from 'react'
import List from './List'
import { Provider } from 'services/FilterContext'
import { fakeFriends } from './utils'

export default {
  title: 'Friend/List',
  component: List,
  decorators: [storyFn => <Provider>{storyFn()}</Provider>],
}

export const Default = () => <List friends={fakeFriends(4)} />
