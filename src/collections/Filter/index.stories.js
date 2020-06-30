import React from 'react'
import Filter from '.'
import { FilterProvider } from '.'

export default {
  title: 'Filter',
  component: Filter,
  decorators: [storyFn => <FilterProvider>{storyFn()}</FilterProvider>],
}

export const Default = () => <Filter />
