import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react'
import Users from "./Component/Users/Users"
function App() {


  return (
    <div className="App">
      <h1>List Users</h1>
     <Users/>
   
    </div>
  );
}

export default App;
