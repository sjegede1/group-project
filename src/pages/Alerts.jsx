import React from 'react'
import Alert from '../components/Alert'
import City from '../components/City'
import CurrentTime from '../components/CurrentTime'

function Alerts() {
  return (
    <div>
      <div className="locationTime">
        <City />
        <CurrentTime />
        </div>
      <Alert />
    
    </div>
  )
}

export default Alerts
