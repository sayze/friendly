import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FilterContext } from '.'

const Filter = () => {
  const { setSearch } = useContext(FilterContext)

  const handleSearchChange = evt => {
    setSearch(evt.target.value)
  }

  return (
    <InputGroup className="mb-3 filter">
      <span className="filter__search-icon">
        <FontAwesomeIcon icon={['fa', 'search']} />
      </span>
      <FormControl
        className="filter__search-input"
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearchChange}
      />
    </InputGroup>
  )
}

Filter.defaultProps = {
  initialValue: '',
}

Filter.propTypes = {
  initialValue: PropTypes.string,
}

export default Filter
