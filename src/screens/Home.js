import React from 'react'
import ActionBar from 'components/UI/ActionBar'
import { Col, Row } from 'react-bootstrap'
import { List } from 'components/Friend'

const Home = () => (
  <>
    <Row className="my-5">
      <Col>
        <ActionBar />
      </Col>
    </Row>
    <Row>
      <Col>
        <List />
      </Col>
    </Row>
  </>
)

export default Home
