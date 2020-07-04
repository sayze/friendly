import React, { useContext } from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import ActionBar from 'components/UI/ActionBar'
import NoContent from 'components/UI/NoContent'
import Form from 'components/UI/Form'
import { Delete, Tile } from '.'
import { ModalContext } from 'services/providers'
import store, { useStore } from 'services/store'

const renderFriends = (friends, dispatchFn, submitFn, deleteFn) => {
  return friends.length > 0 ? (
    friends.map(friend => (
      <Row key={`${friend.id}-row`} className="my-2">
        <Col key={`${friend.id}-col`}>
          <Tile
            key={`${friend.id}-tile`}
            image={friend.image}
            name={friend.name}
            subtext={friend.info}
            onEditClick={() =>
              dispatchFn({
                type: 'show',
                payload: {
                  title: friend.name,
                  content: (
                    <Form
                      name={friend.name}
                      image={friend.image}
                      onSubmit={values => submitFn({ id: friend.id, ...values })}
                    />
                  ),
                },
              })
            }
            onDeleteClick={() =>
              dispatchFn({
                type: 'show',
                payload: {
                  title: friend.name,
                  content: <Delete friend={friend} onSubmit={deleteFn} />,
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

const List = () => {
  const modal = useContext(ModalContext)
  const [{ loading, data }, dispatch] = useStore()

  const handleSave = values => {
    dispatch(store.updateFriend(values))
  }

  const handleDelete = friend => {
    dispatch(store.deleteFriend(friend.id))
  }

  const handleAdd = values => {
    dispatch(store.addFriend(values))
  }

  return loading ? (
    <Row className="my-5 text-center">
      <Col>
        <Spinner className="mr-1" animation="grow" variant="secondary" size="sm" role="status" />
        <Spinner className="mr-1" animation="grow" variant="info" size="sm" role="status" />
        <Spinner animation="grow" variant="primary" size="sm" role="status" />
      </Col>
    </Row>
  ) : (
    <>
      <Row className="mt-5">
        <Col>
          <ActionBar onAddFriend={handleAdd} />
        </Col>
      </Row>
      {renderFriends(data, modal.dispatch, handleSave, handleDelete)}
    </>
  )
}

export default List
