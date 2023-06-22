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
    <div className='home'>
    <h1>Good {greetingTime}, {user}!</h1>
    <div className='cards'>
    <div className='card'>
      <Location/>
    </div>
    <div className='card'>
      <Weather/>
    </div>
    </div>
    </div>
  )
}

export default Home