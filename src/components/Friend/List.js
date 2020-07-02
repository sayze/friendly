import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import Tile from '.'
import NoContent from 'components/UI/NoContent'

const renderFriends = friends =>
  friends.length > 0 ? (
    friends.map(friend => (
      <Row className="my-2">
        <Col>
          <Tile image={friend.img} name={friend.name} subtext={friend.info} />
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

const List = ({ friends }) => {
  return <Container>{renderFriends(friends)}</Container>
}

List.defaultProps = {
  friends: [],
}

List.propTypes = {
  friends: PropTypes.array,
}

export default List
