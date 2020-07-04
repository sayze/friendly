import React, { useContext } from 'react'
import SearchInput from 'components/UI/SearchInput'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import { FilterContext, ModalContext } from 'services/providers'
import { Row, Col } from 'react-bootstrap'
import Form from 'components/UI/Form'

const ActionBar = ({ onAddFriend }) => {
  const { setSearch } = useContext(FilterContext)
  const modal = useContext(ModalContext)

  const handleChange = evt => {
    setSearch(evt.target.value)
  }

  const handleAddClick = () => {
    modal.dispatch({
      type: 'show',
      payload: {
        title: 'Add new friend',
        content: <Form onSubmit={onAddFriend} />,
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

ActionBar.defaultProps = {
  onAddFriend: () => {},
}

ActionBar.propTypes = {
  onAddFriend: PropTypes.func,
}

export default ActionBar
