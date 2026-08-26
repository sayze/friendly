import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/index.scss'
import '../src/fontawesome'
import { FilterProvider, ModalProvider } from '../src/services/providers'

/** @type {import('@storybook/react-vite').Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <ModalProvider>
        <FilterProvider>
          <Story />
        </FilterProvider>
      </ModalProvider>
    ),
  ],
}

export default preview
