import React, { useContext, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import NoContent from 'components/UI/NoContent'
import Form from 'components/UI/Form'
import { Delete, Tile } from '.'
import { ModalContext, DataContext } from 'services/providers'

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
  const data = useContext(DataContext)

  useEffect(() => {
    modal.dispatch({ type: 'hide' })
  }, [data.state, modal])

  const handleSave = values => {
    setTimeout(() => data.dispatch({ type: 'update', payload: values }), 2000)
  }

  const handleDelete = friend => {
    setTimeout(() => data.dispatch({ type: 'delete', payload: { id: friend.id } }), 2000)
  }

  return renderFriends(data.state, modal.dispatch, handleSave, handleDelete)
}

export default List
