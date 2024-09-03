import React, { useState } from 'react';
import './App.css';
import { users } from './data'

const App = () => {
  const [ searchItem, setSearchItem ] = useState('');
  const [ filteredUsers, setFilteredUsers ] = useState(users);


  const handleClick = () => {
    const filterItems = users.filter(
      (user) => user.firstName.toLowerCase().includes(searchItem.toLowerCase())
    )

    const filterItemsAge = users.filter(
      (user) => user.age.toString().includes(searchItem)
    )

    if (filterItems.length !== 0) {
      setFilteredUsers(filterItems);
    }
    
    if (filterItemsAge.length !== 0) {
      setFilteredUsers(filterItemsAge);
    }

    // setFilteredUsers(filterItems);
  }
  const handleInputChange = (e) => {
    const inputTerm = e.target.value;
    setSearchItem(inputTerm);
  }
return (
<div className='container'>
  <input 
  className='search-input'
  placeholder='search items'
  type='text'
  onChange={handleInputChange}
  />
  <button
  onClick={handleClick}
  >Search</button>

  <ul>
    {filteredUsers.map(user => <li key={user.id}>{`${user.firstName} - ${user.age}`}</li>)}
  </ul>
</div>
)
}

export default App