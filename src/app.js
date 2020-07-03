import React from 'react'
import { Container } from 'react-bootstrap'
import 'fontawesome'
import Home from 'screens/Home'
import { FilterProvider, ModalProvider, DataProvider } from 'services/providers'

function App() {
  return (
    <Container>
      <DataProvider>
        <ModalProvider>
          <FilterProvider>
            <Home />
          </FilterProvider>
        </ModalProvider>
      </DataProvider>
    </Container>
  )
}

export default App
