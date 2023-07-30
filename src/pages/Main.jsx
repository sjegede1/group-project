import React from "react";
import CitySearchBar from "../components/CitySearchBar";
import City from "../components/City";
import WeatherDisplay from "../components/WeatherDisplay";
import CurrentTime from "../components/CurrentTime";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";
import Nav from "../components/Nav";

function Main() {
  return (
    <div className="main-page">
      <div className="locationTime">
        <City />
        <CurrentTime />
      </div>
      <WeatherDisplay />
      <HourlyForecast />
      <DailyForecast />
      {/* <CitySearchBar /> */}
      <Nav />
    </div>
  );
}

export default Main;
