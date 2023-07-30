import React from "react";
import { useState } from "react";

function CurrentTime() {
  const [timeNow, setTimeNow] = useState(new Date());
  const changeTime = () => {
    setTimeNow(new Date());
  };
  setTimeout(changeTime, 1000);
  const getDayofTheWeek = () => {
    let date = new Date();
    let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    return days[date.getDay()]
  }
  const getMonthName = () => {
    let date = new Date();
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return months[date.getDay()]
  }

  let hh =
    String(timeNow.getHours()).length == 2
      ? String(timeNow.getHours())
      : `0${String(timeNow.getHours())}`;
  let mm =
    String(timeNow.getMinutes()).length == 2
      ? String(timeNow.getMinutes())
      : `0${String(timeNow.getMinutes())}`;
  let ss =
    String(timeNow.getSeconds()).length == 2
      ? String(timeNow.getSeconds())
      : `0${String(timeNow.getSeconds())}`;
  return (
    <div className="current-time">
      {getDayofTheWeek()} {getMonthName()} {new Date().getDate()} {hh}:{mm} 
    </div>
  );
}

export default CurrentTime;
