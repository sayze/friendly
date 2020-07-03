import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import NoContent from 'components/UI/NoContent'
import { Form, Tile } from '.'
import { ModalContext } from 'services/providers'
import Button from 'react-bootstrap/Button'

const renderFriends = (friends, dispatchFn) => {
  return friends.length > 0 ? (
    friends.map(friend => (
      <Row key={`${friend.id}-row`} className="my-2">
        <Col key={`${friend.id}-col`}>
          <Tile
            key={`${friend.id}-tile`}
            image={friend.img}
            name={friend.name}
            subtext={friend.info}
            onEditClick={() =>
              dispatchFn({
                type: 'show',
                payload: {
                  title: friend.name,
                  content: <Form name={friend.name} />,
                  actions: <Button variant="success">Save Friend</Button>,
                },
              })
            }
            onDeleteClick={() =>
              dispatchFn({
                type: 'show',
                payload: {
                  title: friend.name,
                  content: (
                    <span>
                      Are you sure you want to delete <strong>{friend.name}?</strong> Action can't be undone.
                    </span>
                  ),
                  actions: <Button variant="danger">Yes, Delete</Button>,
                },
              })
            }
          />
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

const List = ({ friends }) => {
  const { state, dispatch } = useContext(ModalContext)
  return <Container>{renderFriends(friends, dispatch)}</Container>
}

List.defaultProps = {
  friends: [],
}

List.propTypes = {
  friends: PropTypes.array,
}

export default List
