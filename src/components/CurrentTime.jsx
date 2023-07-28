import React from 'react'
import { useState } from 'react'

function CurrentTime() {
  const [timeNow, setTimeNow] = useState(new Date())
  const changeTime = () => {
    setTimeNow(new Date())
  }
  setTimeout(changeTime,1000)
  let hh = String(timeNow.getHours()).length == 2 ? String(timeNow.getHours()) : `0${String(timeNow.getHours())}`;
  let mm = String(timeNow.getMinutes()).length == 2 ? String(timeNow.getMinutes()) : `0${String(timeNow.getMinutes())}`;
  let ss = String(timeNow.getSeconds()).length == 2 ? String(timeNow.getSeconds()) : `0${String(timeNow.getSeconds())}`;
  return (
    <div className="currrent-time">
      {hh}:{mm}:{ss}
    </div>
  )
}

export default CurrentTime