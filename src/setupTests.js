import React from 'react'
import Enzyme, { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'

configure({ adapter: new Adapter() })

/**
 * Helper function to find a styled component within a root.
 *
 * Root must be rendered using mounted.
 */
Enzyme.findStyled = (root, Component) => {
  return root.find(`.${Component.styledComponentId}`)
}

/**
 * Wrap a given component with the default theme.
 */
Enzyme.withTheme = component => <ThemeProvider theme={theme}>{component}</ThemeProvider>
