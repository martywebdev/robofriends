import React, {useEffect, useState} from 'react'
import './App.css'
import { robots } from './robots'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'

const App = () => {

  const [search, setSearch] = useState('')

  const [filteredRobots, setFilteredRobots] = useState(robots)

  useEffect(() => {

   const filtered =  robots.filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()))

  setFilteredRobots(filtered)

  },[search])

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox setSearch={(value) => setSearch(value)}/>
      <CardList robots={filteredRobots} />
    </div>
  )
}

export default App