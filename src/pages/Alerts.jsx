import React from 'react'
import Alert from '../components/Alert'
import City from '../components/City'
import CurrentTime from '../components/CurrentTime'
import Aqi from '../components/Aqi'
import "./Alerts-test.css"
import Nav from '../components/Nav'

function Alerts() {
  return (
    <div>
      <div className="locationTime">
        <City />
        <CurrentTime />
        </div>
      <Alert />
      <Aqi />
      <Nav />
    </div>
  )
}

export default Alerts
