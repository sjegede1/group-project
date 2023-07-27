import React from 'react'
import CitySearchBar from '../components/CitySearchBar'
import City from '../components/City'
import WeatherDisplay from '../components/WeatherDisplay'
import CurrentTime from '../components/CurrentTime'
import HourlyForecast from '../components/HourlyForecast'
import DailyForecast from '../components/DailyForecast'

function Main() {
  return (
    <div className="main-page">
        <City />
        <CurrentTime />
        <WeatherDisplay />
        <HourlyForecast />
        <DailyForecast />
        <CitySearchBar />
    </div>
  )
}

export default Main