import React, { useContext, useEffect } from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import NoContent from 'components/UI/NoContent'
import Form from 'components/UI/Form'
import { Delete, Tile } from '.'
import { ModalContext } from 'services/providers'
import api, { useApi } from 'services/api'
import { FETCHING, NOOP } from 'services/api/types'

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
  const [{ status, response }, makeRequest] = useApi()

  useEffect(() => {
    makeRequest(api.FRIENDS)
  })

  const handleSave = values => {
    makeRequest(api.UPDATE_FRIEND, values)
  }

  const handleDelete = friend => {
    makeRequest(api.DELETE_FRIEND, friend)
  }

  return status === FETCHING || status === NOOP ? (
    <Row className="my-5 text-center">
      <Col>
        <Spinner className="mr-1" animation="grow" variant="secondary" size="sm" role="status" />
        <Spinner className="mr-1" animation="grow" variant="info" size="sm" role="status" />
        <Spinner animation="grow" variant="primary" size="sm" role="status" />
      </Col>
    </Row>
  ) : (
    renderFriends(response.data, modal.dispatch, handleSave, handleDelete)
  )
}

export default List
