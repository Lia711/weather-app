import React, { useState } from 'react'
import "./Location.scss"
import Button from '../Button/Button';


const Location = () => {
    const [latitude, setLatitude] = useState("unknown");
    const [longitude, setLongitude] = useState("unknown");
    const [status, setStatus] = useState();

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
    <div className='locationCard'>
    <div className='getLocation'>
        <Button buttonText={"Get Location"} onClick={getLocation}/>
    </div>
    <p>{status}</p>
    <p>Location: longitude {longitude}, latitude {latitude}.</p>
    </div>
  )
}

export default Location