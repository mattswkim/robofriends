import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> {setRobots(users)})
    console.log(count)
  },[count])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
 
  const filteredRobots = robots.filter(robots => {
    return robots.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  
  return (
  <div className="tc">
    <h1 className="f1">RoboFriends</h1>
    <button onClick={()=>setCount(count+1)}>Click me!</button>
    <SearchBox searchChange={onSearchChange}/>
    <CardList robots={filteredRobots}/>
  </div>
  );

}

export default App;
