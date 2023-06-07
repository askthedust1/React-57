import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "./components/UserForm/UserForm";
import {IUserInfo} from "./types";
import './App.css';
import Users from "./components/User/Users";



const App = () => {
  const [users, setUsers] = useState<IUserInfo[]>([
    {id: '1', name: 'Han Solo', email: 'Han_Solo@gmail.com', status: true, role: 'editor'},
    {id: '2', name: 'Grogu', email: 'Grogu@gmail.com', status: false, role: 'administrator'},
  ]);

  const addUser = (newUser: IUserInfo) => {
    setUsers(prevState => [...prevState, newUser]);
  };

  console.log(users);

  return (
    <div className="App mt-3">
      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-4">
            <UserForm onSubmit={addUser} />
          </div>

          <div className="col-4">
            <Users items={users} />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
