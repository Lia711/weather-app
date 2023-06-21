import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { Route, Routes, Router } from "react-router-dom";

function App() {
  const [user, setUser] = useState("default name");
  const handleInput = event => {
    event.preventDefault();
    setUser(event.target.value) 
  }
  return (
    <>
        <Routes>
          <Route path="/" element={<Login handleSubmit={handleInput} user={user}/>} />
          <Route path="/home" element={<Home user={user}/>} />
        </Routes>
    </>
  );
}

export default App;
