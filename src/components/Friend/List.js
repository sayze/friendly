import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import NoContent from 'components/UI/NoContent'
import { Tile } from '.'

const renderFriends = friends => {
  return friends.length > 0 ? (
    friends.map(friend => (
      <Row key={`${friend.id}-row`} className="my-2">
        <Col key={`${friend.id}-col`}>
          <Tile key={`${friend.id}-tile`} image={friend.img} name={friend.name} subtext={friend.info} />
        </Col>
      </Row>
    ))
  ) : (
    <Row className="my-5">
      <Col>
        <NoContent
          icon="sad-cry"
          title="You have no friends"
          message="You can start adding friends by pressing the button up top ^^"
        />
      </Col>
    </Row>
  )
}

const List = ({ friends }) => <Container>{renderFriends(friends)}</Container>

List.defaultProps = {
  friends: [],
}

List.propTypes = {
  friends: PropTypes.array,
}

export default List
