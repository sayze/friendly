import React, { useContext, useEffect } from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import ActionBar from 'components/UI/ActionBar'
import NoContent from 'components/UI/NoContent'
import Form from 'components/UI/Form'
import { Delete, Tile } from '.'
import { FilterContext, ModalContext } from 'services/providers'
import { useStore, SET_FRIENDS, ADD_FRIEND, DELETE_FRIEND, UPDATE_FRIEND } from 'services/store'
import { addFriend, deleteFriend, getFriends, updateFriend } from 'services/api'

const renderFriends = (friends = [], dispatchFn, submitFn, deleteFn) => {
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
                      key={`${friend.id}-form`}
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
                  content: <Delete key={`${friend.id}-delete`} friend={friend} onSubmit={deleteFn} />,
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
  const { filters } = useContext(FilterContext)
  const [state, dispatch] = useStore(true)

  useEffect(() => {
    getFriends(filters.search)
      .then(response => {
        dispatch({ type: SET_FRIENDS, payload: response?.data.data || [] })
      })
      .catch(error => {
        console.log(error)
      })
  }, [filters, dispatch])

  const handleSave = values => {
    updateFriend(values.id, values.name, values.image)
      .then(() => {
        dispatch({ type: UPDATE_FRIEND, payload: values })
        modal.dispatch({ type: 'hide' })
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleDelete = friend => {
    deleteFriend(friend.id)
      .then(() => {
        dispatch({ type: DELETE_FRIEND, payload: { id: friend.id } })
        modal.dispatch({ type: 'hide' })
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleAdd = values => {
    addFriend(values.name, values.image)
      .then(({ data }) => {
        dispatch({ type: ADD_FRIEND, payload: { id: data.data.id, ...values } })
        modal.dispatch({ type: 'hide' })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <Row className="mt-5">
        <Col>
          <ActionBar onAddFriend={handleAdd} />
        </Col>
      </Row>
      {state.loading ? (
        <Row className="my-5 text-center">
          <Col>
            <Spinner className="mr-1" animation="grow" variant="secondary" size="sm" role="status" />
            <Spinner className="mr-1" animation="grow" variant="info" size="sm" role="status" />
            <Spinner animation="grow" variant="primary" size="sm" role="status" />
          </Col>
        </Row>
      ) : (
        renderFriends(state.data || [], modal.dispatch, handleSave, handleDelete)
      )}
    </>
  )
}

export default List
