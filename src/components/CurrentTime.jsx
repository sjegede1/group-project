import React from 'react'
import { useState } from 'react'

function CurrentTime() {
  const [timeNow, setTimeNow] = useState(new Date())
  const changeTime = () => {
    setTimeNow(new Date())
  }
  setTimeout(changeTime,1000)
  return (
    <div className="currrent-time">
      {timeNow.getHours()}:{timeNow.getMinutes()}:{timeNow.getSeconds()}
    </div>
  )
}

export default CurrentTime