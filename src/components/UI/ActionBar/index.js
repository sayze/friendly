import React, { useContext } from 'react'
import SearchInput from 'components/UI/SearchInput'
import Button from 'react-bootstrap/Button'
import { FilterContext, ModalContext } from 'services/providers'
import { Row, Col } from 'react-bootstrap'
import { Form } from 'components/Friend'

const ActionBar = () => {
  const { setSearch } = useContext(FilterContext)
  const { dispatch } = useContext(ModalContext)

  const handleChange = evt => {
    setSearch(evt.target.value)
  }

  const handleAddClick = () => {
    dispatch({
      type: 'show',
      payload: {
        title: 'Add new friend',
        content: <Form />,
        actions: <Button variant="success">Save Friend</Button>,
      },
    })
  }

  return (
    <Row className="justify-content-between align-items-baseline">
      <Col sm md={5}>
        <SearchInput onChange={handleChange} />
      </Col>
      <Col sm className="text-right">
        <Button variant="primary" onClick={handleAddClick}>
          + Add Friend
        </Button>
      </Col>
    </Row>
  )
}

export default ActionBar
