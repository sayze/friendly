import React from 'react'
import { Container } from 'react-bootstrap'
import 'fontawesome'
import Home from 'screens/Home'
import { FilterProvider, ModalProvider } from 'services/providers'

function App() {
  return (
    <Container>
      <ModalProvider>
        <FilterProvider>
          <Home />
        </FilterProvider>
      </ModalProvider>
    </Container>
  )
}

export default App
