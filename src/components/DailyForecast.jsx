import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../contexts/context";

function DailyForecast() {
  let { data } = useContext(AppContext);

  if (!data) {
    return <div className="forecastday"></div>;
  }

  const getDayofTheWeek = (dateStr,index) => {
    let date = new Date(dateStr);
    let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    switch (index) {
      case 0:
        return "Today"
      case 1:
        return "Tomorrow";
      default:
        return days[date.getDay()]
    }
  }

  return (
    <div className="forecastday">
      {data.forecast.forecastday.map((day, index) => {
        return (
          <div className="forecast-daily" key={index}>

            <h6>{getDayofTheWeek(day.date,index)}</h6>
            <img src={day.day.condition.icon} alt="" className="carousel-icon dailyForecastImg"/>
            <p className="carousel-temp">
              {parseInt(day.day.maxtemp_f)}°/{parseInt(day.day.mintemp_f)}°
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default DailyForecast;
