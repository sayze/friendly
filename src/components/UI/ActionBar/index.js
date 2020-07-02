import React, { useContext } from 'react'
import SearchInput from 'components/UI/SearchInput'
import Button from 'react-bootstrap/Button'
import Context from 'services/FilterContext'
import { Row, Col } from 'react-bootstrap'

const ActionBar = () => {
  const { setSearch } = useContext(Context)

  const handleChange = evt => {
    setSearch(evt.target.value)
  }

  return (
    <Row className="justify-content-between align-items-baseline">
      <Col sm md={5}>
        <SearchInput onChange={handleChange} />
      </Col>
      <Col sm className="text-right">
        <Button variant="primary">+ Add Friend</Button>
      </Col>
    </Row>
  )
}

export default ActionBar
