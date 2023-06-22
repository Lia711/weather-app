import React from 'react'
import "./Login.scss"
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const {handleSubmit, user} = props;
    const navigate = useNavigate();

    const handleClick=()=> {
      console.log("user", user)
      if (user!="default name") {
        navigate("/home");
      } else {
        alert("Type in a user name")
      }
    }

    
  return (
    <div className='login'>
        <h1>Welcome to Weather App!</h1>
        <h2>Please input your name:</h2>
        <form className="login-form" >
          <label htmlFor="userName">User Name: </label>
          <input
            type="text"
            name="userName"
            className="login-form__input"
            onChange = {handleSubmit}
          />
        </form>
        <Button buttonText={"Continue"} onClick={handleClick}/>
    </div>
  )
}

export default Login