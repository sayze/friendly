import React from 'react'
import ActionBar from 'components/UI/ActionBar'
import { Col, Row } from 'react-bootstrap'
import { List } from 'components/Friend'
import { fakeFriends } from '../components/Friend/utils'

const Home = () => (
  <>
    <Row className="mt-5">
      <Col>
        <ActionBar />
      </Col>
    </Row>
    <Row>
      <Col>
        <List friends={fakeFriends(12)} />
      </Col>
    </Row>
  </>
)

export default Home
