import React from 'react'
import "./Login.scss"
import Button from '../Button/Button';

const Login = (props) => {
    const {handleSubmit} = props;


    
  return (
    <div className='login'>
        <h1>Welcome to Weather App! Please input your name:</h1>
        <form className="login-form" >
          <label htmlFor="userName">User Name: </label>
          <input
            type="text"
            name="userName"
            className="login-form__input"
            onChange = {handleSubmit}
          />
        </form>
        <Button buttonText={"Continue"}/>
    </div>
  )
}

export default Login