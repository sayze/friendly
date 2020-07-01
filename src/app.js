import React from 'react'
import { Container } from 'react-bootstrap'
import 'fontawesome'
import Home from 'screens/Home'
import { Provider } from 'services/FilterContext'

function App() {
  return (
    <Container>
      <Provider>
        <Home />
      </Provider>
    </Container>
  )
}

export default App
