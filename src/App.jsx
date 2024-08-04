import React, {useEffect, useState} from 'react'
import './App.css'
import { robots } from './robots'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'

const App = () => {

  const [search, setSearch] = useState('')

  const [filteredRobots, setFilteredRobots] = useState([])


  useEffect(() => {
    console.log('running')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      setFilteredRobots(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }, [])

  useEffect(() => {

    if (search) {
      const filtered =  robots.filter(robot => robot.name.toLowerCase().includes(search.toLowerCase())
       || robot.email.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      setFilteredRobots(filtered)
    }
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