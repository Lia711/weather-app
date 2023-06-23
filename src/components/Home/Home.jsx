import React, { useState, useEffect } from 'react'
import "./Home.scss"
import Weather from '../Weather/Weather';
import Button from '../Button/Button';

const Home = (props) => {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [status, setStatus] = useState();
    const {user} = props;
    const currentHour = new Date().getHours();
    let greetingTime = "Morning";

    if (currentHour >= 12) {
      greetingTime = "Afternoon";
    }

    if (currentHour >= 18) {
      greetingTime = "Evening";
    }

    const getLocation = () => {
      if (!navigator.geolocation) {
          setStatus("Your browser does not allow use of location.")
      } else {
          navigator.geolocation.getCurrentPosition((position)=> {
              setStatus("Success!");
              setLatitude(position.coords.latitude)
              setLongitude(position.coords.longitude)
          }, ()=> {
              setStatus("Unable to retrieve location")
          })
      }
  }

  useEffect(()=>{
    getLocation();
  },[])

  return (
    <div className='home'>
      <h1>Good {greetingTime}, {user}!</h1>
        <div className='card'>
          <Weather longitude={longitude} latitude={latitude}/>
        </div>
    </div>
  )
}

export default Home