import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import Tile from './Tile'
import Context from 'services/FilterContext'

const filterFriends = (friends, { search }) => {
  if (search.trim().length === 0) {
    return friends
  }
  const query = search.toLowerCase()
  return friends.filter(friend => friend.name.toLowerCase().indexOf(query) > -1)
}

const List = ({ friends }) => {
  const { filters } = useContext(Context)

  return (
    <Container>
      {filterFriends(friends, filters).map(friend => (
        <Row>
          <Col>
            <Tile image={friend.img} name={friend.name} subtext={friend.info} />
          </Col>
        </Row>
      ))}
    </Container>
  )
}

List.defaultProps = {
  friends: [],
}

List.propTypes = {
  friends: PropTypes.array,
}

export default List
