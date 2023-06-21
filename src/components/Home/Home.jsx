import React from 'react'
import "./Home.scss"
import Location from '../Location/Location';
import Weather from '../Weather/Weather';


const Home = (props) => {
    const {user} = props;
    const currentHour = new Date().getHours();
    let greetingTime = "Morning";

    if (currentHour >= 12) {
      greetingTime = "Afternoon";
    }

    if (currentHour >= 18) {
      greetingTime = "Evening";
    }
  return (
    <>
    <div>User Name: {user}</div>
    <p>Good {greetingTime}, {user}!</p>
    <Location/>
    <Weather/>
    </>
  )
}

export default Home