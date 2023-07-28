import React, {useContext} from 'react'
import {AppContext} from '../contexts/context'

function Aqi() { 
let {data} = useContext(AppContext);

const loaded = ()=>{
  return (
    <div className="aqi1">
        <h2>Air Quality Index</h2>
    <div className="aqiInfo">
      <div className="co"> Co:{data.air_quality.co}</div>
      <div className="03"> O3:{data.air_quality.o3}</div>
      <div className="so2"> So2:{data.air_quality.so2}</div>
      <div className="pm10"> Pm10:{data.air_quality.pm10}</div>
      <div className="no2"> No2 {data.air_quality.no2}</div>
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
