import { useState } from 'react'
import { setSearch as setSearchInStore } from '../store/robots/robotsSlice'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setSearchInStore(search))
  }
  return (
    <div className='pa2'>
      <form onSubmit={handleSubmit}>
        <input type="search" className="pa3 ba b--green bg-lightest-blue" placeholder='search robots' 
        onChange={handleOnChange}
        onInput={(e: React.FormEvent<HTMLInputElement>) => {
          const target = e.currentTarget as HTMLInputElement;
          if (target.value === '') {
            dispatch(setSearchInStore(target.value));
          }
        }}
        />
      </form>
    </div>
  )
}

export default SearchBox