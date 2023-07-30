import React from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/context";

function HourlyForecast() {
  let { data } = useContext(AppContext);

  const getHourlyArray = () => {
    let currentHour = new Date().getHours();
    let allHours = [];
    data.forecast.forecastday.forEach((day) => {
      allHours = [...allHours, ...day.hour];
    });
    return allHours.slice(currentHour, 24 + currentHour);
  };

  const hourlyArray = data ? getHourlyArray() : [];
  let hhFormatter = (time) => {
    let amPm = time.getHours() < 12 ? "AM" : "PM";
    let currentHour = time.getHours() % 12 ? time.getHours()%12 : 12
    return `${currentHour}${amPm}`
  };

  return (
      <div className="forecast-carousel">
        {hourlyArray.map((hour, index) => {
          return (
            <div className="forecast-hour" key={index}>
              <h6>{hhFormatter(new Date(hour.time))}</h6>
              <img src={hour.condition.icon} alt="" className="carousel-icon"/>
              <p className="carousel-temp">{parseInt(hour.temp_f)}°</p>
            </div>
          );
        })}
      </div>
  );
}

export default HourlyForecast;
