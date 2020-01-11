import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

const general = require.context('../src', true, /.stories.js$/)

function loadStories() {
  general.keys().forEach(filename => general(filename))
}

configure(loadStories, module)
