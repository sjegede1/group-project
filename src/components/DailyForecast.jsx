import React from 'react'
import { useState,useContext } from 'react';
import { AppContext } from '../contexts/context';


function DailyForecast() {
 let {data} = useContext(AppContext);

 const daysToDisplay = 3;
 if (!data ){
  return <></>
 }
 const getDailyAr= () => {
  let daysToDisplay = new Date().getDay();
  let allDays = [];
  data.forecast.forecastday.forEach((day) => {
    allDays.push(day) 
  });

  return  allDays;
};  

  return (
    <div className="dailyforecast">
    <h3>Daily Forecast</h3>
    <div className='forecastday'>
      {data.forecast.forecastday.map((day, index) => {
        return  (
          <div className="forecast-daily" key={index}>
            <h5>{day.date} </h5>
            <img src={day.day.condition.icon} alt=""  />
            <p>{day.day.maxtemp_f}/{day.day.mintemp_f}</p>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default DailyForecast;