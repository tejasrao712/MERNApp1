import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, age, username };
    axios.post("http://localhost:3001/api/postuser", newUser)
      .then(() => {
        setSuccess(true);
        setName('');
        setAge('');
        setUsername('');
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button type="submit">Add User</button>
      </form>
      {success && <p>User added successfully.</p>}
    </div>
  );
}

export default AddUser;
