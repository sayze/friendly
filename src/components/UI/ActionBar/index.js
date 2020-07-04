import React, { useContext } from 'react'
import SearchInput from 'components/UI/SearchInput'
import Button from 'react-bootstrap/Button'
import { FilterContext, ModalContext, DataContext } from 'services/providers'
import { Row, Col } from 'react-bootstrap'
import Form from 'components/UI/Form'

const ActionBar = () => {
  const { setSearch } = useContext(FilterContext)
  const modal = useContext(ModalContext)
  const data = useContext(DataContext)

  const handleChange = evt => {
    setSearch(evt.target.value)
  }

  const handleSave = values => {
    data.dispatch({ type: 'add', payload: values })
  }

  const handleAddClick = () => {
    modal.dispatch({
      type: 'show',
      payload: {
        title: 'Add new friend',
        content: <Form onSubmit={handleSave} />,
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
