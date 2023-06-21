import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Button from './components/Button/Button';
import { Route, Routes, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function App() {
  const [user, setUser] = useState("default name");
  const navigate = useNavigate();

  let userName;
  const handleInput = event => {
    event.preventDefault();
    console.log("username", event)
    userName = event.target.value;
    setUser(userName)
    //navigate("/home");
    if (userName!="") {
      setUser(userName);
      navigate("/home");
    } else {
      alert("Type in a user name")
    }
  }
  return (
    <>
        <Routes>
          <Route path="/" element={<Login handleSubmit={handleInput} />} />
          <Route path="/home" element={<Home user={user}/>} />
        </Routes>
    </>
  );
}

export default App;
