import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import Tile from './Tile'

const List = ({ friends }) => (
  <Container>
    {friends.map(friend => (
      <Row>
        <Col>
          <Tile image={friend.img} name={friend.name} subtext={friend.info} />
        </Col>
      </Row>
    ))}
  </Container>
)

List.defaultProps = {
  friends: [],
}

List.propTypes = {
  friends: PropTypes.array,
}

export default List
