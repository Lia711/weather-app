import React, { useState } from 'react'
import "./Weather.scss"
import Button from '../Button/Button';


const Weather = (props) => {
    const {longitude, latitude} = props;
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState();

    const api = {
        key: "467423c807784587a4c104145232106",
        base: "http://api.weatherapi.com/v1"
    }

    const getWeather = async()=> {
        let url = `${api.base}/current.json?key=${api.key}&q=${latitude},${longitude}`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data)
        console.log(data)
        console.log(weather)
        console.log(data.current.humidity)
    }

    const getForecast = async()=> {
        let url = `${api.base}/forecast.json?key=${api.key}&${latitude},${longitude}&days=7`;
        const response = await fetch(url);
        const data2 = await response.json();
        setForecast(data2)
        console.log(data2)
        console.log(weather)
    }
    console.log(weather)
    console.log(forecast)
  return (
    <div className='weatherCard'>
    <h3>Weather</h3>
    <div className='content'>
    <Button buttonText={"Get Current Weather"} onClick={getWeather}/>
        {weather ? <div className='current'>
            <p>Current Weather: {weather.current.humidity} </p>
        </div> : null}
    <Button buttonText={"Get Forecast"} onClick={getForecast}/>
        {forecast ? <div className='forecast'> 
            <p>Forecast: </p> 
        </div> : null}
    </div>
    </div>
  )
}

export default Weather