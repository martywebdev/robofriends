import React from 'react'

const SearchBox = ({setSearch}) => {
  const handleOnChange = e => {
    setSearch(e.target.value)
  }
  return (
    <div className='pa2'>
      <input type="search" className="pa3 ba b--green bg-lightest-blue" placeholder='search robots' 
      onChange={handleOnChange}
      />
    </div>
  )
}

export default SearchBox