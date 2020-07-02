import React from 'react'
import ActionBar from '.'
import { FilterProvider } from 'services/providers'

export default {
  title: 'UI/Action Bar',
  component: ActionBar,
  decorators: [storyFn => <FilterProvider>{storyFn()}</FilterProvider>],
}

export const Default = () => <ActionBar />
