import React, { useContext } from "react";

import { AppContext } from "../contexts/context";

function WeatherDisplay() {
  let {data} = useContext(AppContext)
  const loaded = ()=>{
    return(
          <div className="wdInfo">
      <img src={data.current.condition.icon} alt="" className="wdIcon"/>
      <div className="wdSubInfo">
        <div className="wdTemperature">{data.current.temp_f}° F</div>
        <div className="wdCurrentWeather">{data.current.condition.text}</div>
        <div className="wdHumidity">Humidity: {data.current.humidity}%</div>
        <div className="wdWindSpd">Wind speed: {data.current.wind_mph} MPH</div>
      </div>
    </div>
    )
  }
  const loading = ()=>{
    return(
      <div>Loading...</div>
    )
  }
  return data ? loaded():loading();
}

export default WeatherDisplay;
