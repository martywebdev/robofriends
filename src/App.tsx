import React, {useEffect} from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRobots } from './store/robots/robotsSlice'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'

const App = () => {

  // const [search, setSearch] = useState('')

  // const [filteredRobots, setFilteredRobots] = useState([])


  // useEffect(() => {
  //   console.log('running')
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     } else {
  //       throw new Error('Network response was not ok.');
  //     }
  //   })
  //   .then(data => {
  //     setFilteredRobots(data);
  //   })
  //   .catch(error => {
  //     console.error('There was a problem with the fetch operation:', error);
  //   });
  // }, [])

  // useEffect(() => {  
  //     const filtered =  robots.filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()) || robot.email.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  //     setFilteredRobots(filtered)    
  // },[search])

  ////////////////////REDUX////////////
  const dispatch = useDispatch();
  const { filteredRobots, status, error } = useSelector((state) => state.robots);

  useEffect(() => {
    dispatch(fetchRobots());
  }, []);

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox/>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      <CardList robots={filteredRobots} />
    </div>
  )
}

export default App