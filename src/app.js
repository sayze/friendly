import React from 'react'
import { Container } from 'react-bootstrap'
import 'fontawesome'
import Home from 'screens/Home'
import { FilterProvider } from 'services/providers'

function App() {
  return (
    <Container>
      <FilterProvider>
        <Home />
      </FilterProvider>
    </Container>
  )
}

export default App
