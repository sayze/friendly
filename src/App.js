import React from 'react'
import { styled } from 'styled-components'
import { Switch, Route, useParams, Redirect, BrowserRouter as Router } from 'react-router-dom'

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
              <Redirect exact path="/" component={Home} />
              <Route path="/friends/:name" component={Friends} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default styled(App)`
  height: 100%;
  overflow: hidden; /*makes the body non-scrollable (we will add scrolling to the sidebar and main content containers)*/
  margin: 0px; /*removes default style*/
  display: flex; /*enables flex content for its children*/
  box-sizing: border-box;

  .column {
    height: 100%; /*allows both columns to span the full height of the browser window*/
    display: flex;
    flex-direction: column; /*places the left and right headers above the bottom content*/
  }

  .content {
    width: 100%;
    flex-basis: 100%;
    margin-top: 60px;
  }

  .bottom {
    flex-grow: 1; /*ensures that the container will take up the full height of the parent container*/
    overflow-y: auto; /*adds scroll to this container*/
  }
`
