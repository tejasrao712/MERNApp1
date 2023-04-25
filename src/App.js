import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import UserList from "./Components/UserList";
import DeleteUser from './Components/DeleteUser';
import AddUser from './Components/AddUser';


function App() {
 

  return (
      <div className="App">
        <UserList />
        <DeleteUser/>
        <AddUser/>
      </div>
    );
};

export default App;

 // const [listOfUsers, setlistOfUsers] = useState([]);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getUsers")
  //     .then((response) => {
  //       setlistOfUsers(response.data);
  //     })
  // }, []);

  // const createUser = () => {
  //   Axios.post("http://localhost:3001/createUser", {name, age, username})
  //     .then((response) => {
  //       setlistOfUsers([...listOfUsers, { name, age, username },]);
  //     });
  // };

  //   return (
  //     <div className="App">
  //       <div className="usersDisplay">
  //         {listOfUsers.map((user) => {
  //           return (
  //             <div>
  //               <h1>Name: {user.name}</h1>
  //               <h1>Age: {user.age}</h1>
  //               <h1>Username: {user.username}</h1>
  //             </div>
  //           )
  //         })}  
  //       </div>
  //       <div>
  //         <input type = "text" placeholder="Name" onChange={(event) =>{
  //           setName(event.target.value);
  //         }}/>
  //         <input type = "number" placeholder="Age" onChange={(event) =>{
  //           setAge(event.target.value);
  //         }}/>
  //         <input type = "text" placeholder="Username" onChange={(event) =>{
  //           setUsername(event.target.value);
  //         }}/>

  //         <button onClick={createUser}> Create User </button>
  //       </div>
  //     </div>
  //   );
  // }