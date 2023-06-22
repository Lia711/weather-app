import React, { useState } from 'react'
import "./Home.scss"
import Location from '../Location/Location';
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

  return (
    <div className='home'>
    <h1>Good {greetingTime}, {user}!</h1>
    <div className='cards'>
    <div className='card'>
    <div className='getLocation'>
        <Button buttonText={"Get Location"} onClick={getLocation}/>
    </div>
      <Location longitude={longitude} latitude={latitude} status={status}/>
    </div>
    <div className='card'>
      <Weather longitude={longitude} latitude={latitude}/>
    </div>
    </div>
    </div>
  )
}

export default Home