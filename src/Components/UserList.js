import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <p>{user.age} years old</p>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
