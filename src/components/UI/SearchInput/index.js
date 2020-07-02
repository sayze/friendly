import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const SearchInput = props => (
  <InputGroup className="mb-3 search">
    <span className="search__icon">
      <FontAwesomeIcon icon="search" />
    </span>
    <FormControl className="search__input" placeholder="Search" aria-label="Search" {...props} />
  </InputGroup>
)

SearchInput.defaultProps = {
  props: {},
}

SearchInput.propTypes = {
  props: PropTypes.object,
}

export default SearchInput
