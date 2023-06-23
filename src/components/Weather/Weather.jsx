import React, { useState } from 'react'
import "./Weather.scss"
import Button from '../Button/Button';


const Weather = (props) => {
    const {longitude, latitude} = props;
    const currentDate = new Date()
    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`
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
    }
    const getForecast = async()=> {
        let url = `${api.base}/forecast.json?key=${api.key}&q=${latitude},${longitude}`;
        const response = await fetch(url);
        const data2 = await response.json();
        setForecast(data2)
    }

  return (
    <div className='weather'>
        <div className='weather-cards'>
            <div className='content'>
                <h3>Weather</h3>
                <Button buttonText={"Get Weather"} onClick={getWeather}/>
                {weather ? <div className='text'>
                    <h4>Showing current weather for {weather.location.name}</h4>
                    <img src={weather.current.condition.icon} alt="" />
                    <p>Condition: {weather.current.condition.text}</p>
                    <p>Temperature: {weather.current.temp_c} °C</p>
                    <p>Wind: {weather.current.wind_kph} km/h</p>
                    <p>Humidity: {weather.current.humidity} %</p>
                </div> : null}
            </div>
            <div className='content'>
            <h3>Forecast</h3>
            <Button buttonText={"Get Forecast"} onClick={getForecast}/>
                {forecast ? <div className='text'> 
                    <h4>Showing forecast for {date}</h4>
                    <img src={forecast.forecast.forecastday[0].day.condition.icon} alt="" />
                    <p>Condition: {forecast.forecast.forecastday[0].day.condition.text}</p>
                    <p>Sunrise/Sunset: {forecast.forecast.forecastday[0].astro.sunrise}/ {forecast.forecast.forecastday[0].astro.sunset} </p>
                    <p>Min/Max Temperature: {forecast.forecast.forecastday[0].day.mintemp_c} °C/  {forecast.forecast.forecastday[0].day.maxtemp_c} °C</p>
                    <p>Chance of rain: {forecast.forecast.forecastday[0].day.daily_chance_of_rain} %</p>
                </div> : null}
            </div>
        </div>
    </div>
  )
}

export default Weather