import React, { useState } from 'react'
import "./Weather.scss"

const Weather = () => {
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState();

    const api = {
        key: "467423c807784587a4c104145232106",
        base: "http://api.weatherapi.com/v1"
    }

    const getWeather = async()=> {
        let url = `${api.base}/current.json?key=${api.key}&q=............`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data)
    }

    const getForecast = async()=> {
        let url = `${api.base}/forecast.json?key=${api.key}&q=............`;
        const response = await fetch(url);
        const data = await response.json();
        setForecast(data)
    }
  return (
    <>
    <div>Weather</div>
    <Button buttonText={"Get Current Weather"} onClick={getWeather}/>
    <p>Current Weather: {weather}</p>
    <Button buttonText={"Get Forecast"} onClick={getForecast}/>
    <p>Forecast: {forecast}</p>
    </>
  )
}

export default Weather