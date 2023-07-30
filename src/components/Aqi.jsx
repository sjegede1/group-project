import React, {useContext} from 'react'
import {AppContext} from '../contexts/context'

function Aqi() { 
let {data} = useContext(AppContext);

const loaded = ()=>{
  let usEPAIndexArray = {1: "Good", 2: "Moderate", 3: "Unhealthy for sensitive groups", 4: "Unhealthy", 5: "Very Unhealthy", 6: "Hazardous",}
  return (
    <div className="aqi1">
        <h4>Air Quality Index</h4>
    <div className="aqiInfo">
      <div className="us-epa-index">US EPA Index: {data.current.air_quality["us-epa-index"]} - {usEPAIndexArray[data.current.air_quality["us-epa-index"]]}</div>
      <div className="co"> Co: {data.current.air_quality.co.toFixed(2)} µg/m<sup>3</sup></div>
      <div className="03"> O3: {data.current.air_quality.o3.toFixed(2)} µg/m<sup>3</sup></div>
      <div className="so2"> So2: {data.current.air_quality.so2.toFixed(2)} µg/m<sup>3</sup></div>
      <div className="pm10"> Pm10: {data.current.air_quality.pm10.toFixed(2)} µg/m<sup>3</sup></div>
      <div className="no2"> No2: {data.current.air_quality.no2.toFixed(2)} µg/m<sup>3</sup></div>
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
export default Aqi
