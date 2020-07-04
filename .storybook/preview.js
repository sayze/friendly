import React from 'react'
import { addDecorator } from '@storybook/react'
import '../src/index.scss'
import '../src/fontawesome'
import { ModalProvider, FilterProvider } from '../src/services/providers'

addDecorator(storyFn => (
  <ModalProvider>
    <FilterProvider>{storyFn()}</FilterProvider>
  </ModalProvider>
))
