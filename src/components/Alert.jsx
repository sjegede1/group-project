import React,{useContext} from 'react'
import {AppContext} from '../contexts/context'


function Alert() {
    let {data} = useContext(AppContext)
    const loaded =()=>{
        return (
            <div>
                <p className='alertInfo'>Sunrise: {data.forecast.forecastday[0].astro.sunrise}</p>
                <p className="alertInfo">Sunset: {data.forecast.forecastday[0].astro.sunset}</p>
                <p className="alertInfo">Moonrise: {data.forecast.forecastday[0].astro.moonrise}</p>
                <p className="alertInfo">Moonset: {data.forecast.forecastday[0].astro.moonset}</p>
            </div>
          )
    }
    const loading=()=>{
        return(
            <div>Loading...</div>
        )
    }
    return data ? loaded():loading()
}

export default Alert