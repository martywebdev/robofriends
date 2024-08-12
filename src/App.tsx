import React, {useEffect} from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRobots } from './store/robots/robotsSlice'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import { AppDispatch, RootState } from './store'

const App = () => {

  ////////////////////REDUX////////////
  const dispatch = useDispatch<AppDispatch>();
  const { filteredRobots, status, error } = useSelector((state: RootState) => state.robots);

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