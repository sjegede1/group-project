import React from "react";
import CitySearchBar from "../components/CitySearchBar";
import City from "../components/City";
import WeatherDisplay from "../components/WeatherDisplay";
import CurrentTime from "../components/CurrentTime";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";
import Uv from '../components/Uv'

function Main() {
  return (
    <div className="main-page">
      <div className="dskMain">
      <div className="locationTime">
        <City />
        <CurrentTime />
      </div>
      <WeatherDisplay />
      <HourlyForecast />
      <DailyForecast />
      <CitySearchBar />
      </div>
      <div className="dskMainRight">
      <Uv />
      </div>
    </div>
  );
}

export default Main;
