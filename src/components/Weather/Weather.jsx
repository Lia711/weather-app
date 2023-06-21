import React, { useState } from 'react'
import "./Weather.scss"
import Button from '../Button/Button';


const Weather = () => {
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState();

    const api = {
        key: "467423c807784587a4c104145232106",
        base: "http://api.weatherapi.com/v1"
    }

    const getWeather = async()=> {
        let url = `${api.base}/current.json?key=${api.key}&q=q=51.473929,-0.020256`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data.current.humidity)
        console.log(data.current.humidity)
    }

    const getForecast = async()=> {
        let url = `${api.base}/forecast.json?key=${api.key}&q=51.473929,-0.020256&days=7`;
        const response = await fetch(url);
        const data2 = await response.json();
        setForecast(data2)
        console.log(data2)
    }
  return (
    <>
    <p>Weather</p>
    <Button buttonText={"Get Current Weather"} onClick={getWeather}/>
    <p>Current Weather: {weather}</p>
    <Button buttonText={"Get Forecast"} onClick={getForecast}/>
    <p>Forecast: {forecast}</p>
    </>
  )
}

export default Weather