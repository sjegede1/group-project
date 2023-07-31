import React,{useContext} from 'react'
import {AppContext} from '../contexts/context'


function Alert() {
    let {data} = useContext(AppContext)
    const loaded =()=>{
        return (
            <div className='alert'>
                <div className='alertMessage'>
                    <p className='alertInfo'>Sunrise: 
                    <img src="https://cdn-icons-png.flaticon.com/512/8179/8179067.png" alt="" className="alertIcon"/>
                    {data.forecast.forecastday[0].astro.sunrise}</p>
                    <p className="alertInfo">Sunset: 
                    <img src="https://media.istockphoto.com/id/1158093387/vector/isolated-sunset-gradient-on-white-background.jpg?s=612x612&w=0&k=20&c=Iy94KxslPLie6RRIzsRC4zWXXl18SxEQ1Os5E_5TL0A=" alt="" className="alertIcon"/>
                    {data.forecast.forecastday[0].astro.sunset}</p>

                    <p className="alertInfo">Moonrise: 
                        <img src="https://static.thenounproject.com/png/971176-200.png" alt="" className="alertIcon"/>
                        {data.forecast.forecastday[0].astro.moonrise}
                    </p>
                    <p className="alertInfo">Moonset: 
                        <img src="https://static.thenounproject.com/png/4669590-200.png" alt="" className="alertIcon"/>
                    {data.forecast.forecastday[0].astro.moonset}</p>
                </div>
                <div className='alertImg'>
                    <img src="https://griffithobservatory.org/wp-content/uploads/2021/03/moon_phases_uppergraphic-scaled.jpg" alt="" className = "moonphaseImg"/>
                    <p className="alertInfo">Moon Phase: {data.forecast.forecastday[0].astro.moon_phase}</p>
                   
                </div>
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