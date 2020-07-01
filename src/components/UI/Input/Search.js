import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchField = props => (
  <InputGroup className="mb-3 search">
    <span className="search__icon">
      <FontAwesomeIcon icon={['fa', 'search']} />
    </span>
    <FormControl className="search__input" placeholder="Search" aria-label="Search" {...props} />
  </InputGroup>
)

SearchField.defaultProps = {
  props: {},
}

SearchField.propTypes = {
  props: PropTypes.object,
}

export default SearchField
