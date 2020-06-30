import React from 'react'
import { Switch, Route, useParams, BrowserRouter as Router } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home Page !</h2>
  </div>
)

const Friends = () => {
  const { name } = useParams()

  return (
    <div>
      <h2>Friends Page</h2>
      <p>Hello {name}</p>
    </div>
  )
}

const NotFound = () => (
  <div>
    <h2>Whoops the page you are after does not exist</h2>
  </div>
)

function App({ className }) {
  return (
    <Router>
      <div className={className}>
        <div className="column content">
          <div className="bottom">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/friends/:name" component={Friends} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
