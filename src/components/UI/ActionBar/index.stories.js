import React from 'react'
import ActionBar from '.'
import { Provider } from 'services/FilterContext'

export default {
  title: 'Action Bar',
  component: ActionBar,
  decorators: [storyFn => <Provider>{storyFn()}</Provider>],
}

export const Default = () => <ActionBar />
