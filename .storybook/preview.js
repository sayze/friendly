import React from 'react'
import { addDecorator } from '@storybook/react'
import '../src/index.scss'
import '../src/fontawesome'
import { DataProvider, ModalProvider, FilterProvider } from '../src/services/providers'

addDecorator(storyFn => (
  <DataProvider>
    <ModalProvider>
      <FilterProvider>{storyFn()}</FilterProvider>
    </ModalProvider>
  </DataProvider>
))
