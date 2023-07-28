import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../contexts/context";

function DailyForecast() {
  let { data } = useContext(AppContext);

  if (!data) {
    return <div className="forecastday"></div>;
  }

  return (
    <div className="forecastday">
      {data.forecast.forecastday.map((day, index) => {
        return (
          <div className="forecast-daily" key={index}>
            <h5>{day.date} </h5>
            <img src={day.day.condition.icon} alt="" />
            <p>
              {parseInt(day.day.maxtemp_f)}°/{parseInt(day.day.mintemp_f)}°
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default DailyForecast;
