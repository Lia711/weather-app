import React from 'react'
import "./Home.scss"

const Home = (props) => {
    const {user} = props;
    console.log("user", user)
  return (
    <div>User Name: {user}</div>
  )
}

export default Home