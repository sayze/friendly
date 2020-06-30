import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Filter = ({ initialValue }) => (
  <InputGroup className="mb-3 filter">
    <span className="filter__search-icon">
      <FontAwesomeIcon icon={['fa', 'search']} />
    </span>
    <FormControl
      className="filter__search-input"
      placeholder="Search"
      aria-label="Search"
      defaultValue={initialValue}
    />
  </InputGroup>
)

Filter.defaultProps = {
  initialValue: '',
}

Filter.propTypes = {
  initialValue: PropTypes.string,
}

export default Filter
