import React, { useState } from 'react';
import axios from 'axios';

const UserDetails = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [username, setUsername] = useState(user.username);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/users/${user._id}`);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = async () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setName(user.name);
        setAge(user.age);
        setUsername(user.username);
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:3001/users/${user._id}`, {
                name,
                age,
                username,
            });
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="user-details">
            {isEditing ? (
                <div>
                    <h2>Edit User</h2>
                    <form onSubmit={handleSave}>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Age:
                            <input
                                type="number"
                                value={age}
                                onChange={(event) => setAge(event.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Username:
                            <input
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>{user.name}</h2>
                    <p>Age: {user.age}</p>
                    <p>Username: {user.username}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
