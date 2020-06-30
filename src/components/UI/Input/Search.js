import React, { useContext } from 'react'
import SearchField from '.'
import Context from 'services/FilterContext'

const Search = () => {
  const { setSearch } = useContext(Context)

  const handleChange = evt => {
    setSearch(evt.target.value)
  }

  return <SearchField onChange={handleChange} />
}

export default Search
