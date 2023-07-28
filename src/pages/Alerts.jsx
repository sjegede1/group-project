import React from 'react'
import Alert from '../components/Alert'
import City from '../components/City'
import CurrentTime from '../components/CurrentTime'
import Aqi from '../components/Aqi'

function Alerts() {
  return (
    <div>
      <div className="locationTime">
        <City />
        <CurrentTime />
        </div>
      <Alert />
      <Aqi />
    
    </div>
  )
}

export default Alerts
