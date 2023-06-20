import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Button from './components/Button/Button';

function App() {
  const [user, setUser] = useState("default name");
  let userName;
  const handleSubmit = event => {
    event.preventDefault();
    userName = event.target.value;
    setUser(userName)
    if (userName) {
      setUser(userName);
    } else {
      alert("Type in a user name")
    }
  }
  return (
    <div className="App">
        <Login handleSubmit={handleSubmit}/>
        <Button buttonText={"Continue"} onClick={handleSubmit}/>
        <Home user={user} />
    </div>
  );
}

export default App;
