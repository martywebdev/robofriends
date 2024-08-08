import React, { useState } from 'react'
import { setSearch as setSearchInStore } from '../store/robots/robotsSlice'
import { useDispatch } from 'react-redux'

const SearchBox = ({}) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleOnChange = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setSearchInStore(search))
  }
  return (
    <div className='pa2'>
      <form onSubmit={handleSubmit}>
        <input type="search" className="pa3 ba b--green bg-lightest-blue" placeholder='search robots' 
        onChange={handleOnChange}
        onInput={e => e.target.value === '' && dispatch(setSearchInStore(e.target.value))}
        />
      </form>
    </div>
  )
}

export default SearchBox