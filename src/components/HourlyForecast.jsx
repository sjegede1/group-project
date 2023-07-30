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
  let hhFormatter = (time) => { return String(time.getHours()).length == 2 ? String(time.getHours()) : `0${String(time.getHours())}`};

  return (
      <div className="forecast-carousel">
        {hourlyArray.map((hour, index) => {
          return (
            <div className="forecast-hour" key={index}>
              <h5 className="hrForecastTime">{hhFormatter(new Date(hour.time))}00</h5>
              <img src={hour.condition.icon} alt="" className="hrForecastImg"/>
              <p>{parseInt(hour.temp_f)}°</p>
            </div>
          );
        })}
      </div>
  );
}

export default HourlyForecast;
