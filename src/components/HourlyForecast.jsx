import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/context'

function HourlyForecast() {
  let {} = useContext(AppContext)
  return (
    <div>HourlyForecast</div>
  )
}

export default HourlyForecast