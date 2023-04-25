import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [id, setId] = useState('');
  const [success, setSuccess] = useState(false);

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/api/removeuser/${id}`)
      .then(() => {
        setSuccess(true);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Delete User</h2>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <button onClick={handleDelete}>Delete</button>
      {success && <p>User deleted successfully.</p>}
    </div>
  );
}

export default DeleteUser;
