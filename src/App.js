import React, { useState, useEffect } from 'react'
import axios from 'axios';

import AllowLocal from './Components/allowLocal/index';
import LoadInfos from './Components/Reaload/index';
import WeatherScreen from './Components/weather';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const apiSecret = process.env.REACT_APP_OPEN_WHEATHER_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    })
  })

  let getWeather = async (lat, long) => {
    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=campinas&APPID=${apiSecret}`, {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric',
      }
    });
    setWeather(res.data);
  }

  if (location === false) {
    return (
      <>
        <AllowLocal />
      </>
    )
  } else if (weather === false) {
    return (
      <>
        <LoadInfos />
      </>
    )
  } else {
    return (
      <>
        <WeatherScreen weather={weather} />
      </>
    );
  }
}

export default App;
