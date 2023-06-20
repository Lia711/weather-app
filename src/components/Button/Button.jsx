import React from 'react'
import "./Button.scss"

const Button = (props) => {
    const {buttonText, onClick} = props;
  return (
    <button onClick={onClick}>{buttonText} </button>
  )
}

export default Button