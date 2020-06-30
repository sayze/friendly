import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import Tile from '../../components/Tile'

const FriendList = ({ friends }) => (
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

FriendList.defaultProps = {
  friends: [],
}

FriendList.propTypes = {
  friends: PropTypes.array,
}

export default FriendList
