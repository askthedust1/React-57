import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import './App.css';
import UserForm from "./components/UserForm/UserForm";
import {IUserInfo} from "./types";


const App = () => {
  const [users, setUsers] = useState<IUserInfo[]>([
    {id: '1', name: 'Victoria', email: '123@gmail.com', status: true, role: 'editor'},
    {id: '2', name: 'Misty', email: '123@gmail.com', status: true, role: 'editor'},
  ]);

  const addUser = (newDish: IUserInfo) => {
    setUsers(prevState => [...prevState, newDish]);
  };

  console.log(users);

  return (
    <div className="App">
      <UserForm onSubmit={addUser} />
    </div>
  );
}

export default App;
