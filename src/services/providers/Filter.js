import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext()

const Provider = ({ children, search, page, limit, total }) => {
  const [filters, setFilters] = useState({ search, page, limit, total })

  const setSearch = (value = '') => {
    setFilters({ ...filters, search: value })
  }

  const setPagination = (page = 1, limit = 10, total = 0) => {
    setFilters({ ...filters, page, limit, total })
  }

  return <Context.Provider value={{ filters, setSearch, setPagination }}>{children}</Context.Provider>
}

Provider.defaultProps = {
  search: '',
  page: 1,
  limit: 10,
  total: 0,
}

Provider.propTypes = {
  search: PropTypes.string,
  page: PropTypes.number,
  limit: PropTypes.number,
  total: PropTypes.number,
}

export default { Context, Provider }
