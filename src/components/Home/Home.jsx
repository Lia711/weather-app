import React from 'react'
import "./Home.scss"

const Home = (props) => {
    const {user} = props;
  return (
    <div>User Name: {user}</div>
  )
}

export default Home