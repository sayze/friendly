import React from 'react'
import SearchField from '.'
import { Provider } from 'services/FilterContext'

export default {
  title: 'Search Input',
  component: SearchField,
  decorators: [storyFn => <Provider>{storyFn()}</Provider>],
}

export const Default = () => <SearchField />
