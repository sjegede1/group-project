import React, { useState, useContext } from 'react';
import { AppContext } from '../contexts/context';

// export const AppContext = createContext()
function City() {
  let {currentCity} = useContext(AppContext)

//   const handleChange = (event) => {
//     setCity(event.target.value);
//   };
//   const handleSubmit = (event) => {
//     //prevents page from reloading upon form submission
//     event.preventDefault();
//     setCurrentCity([...currentCity, data]);
//     setCity('');
//   };

  return (
  <div className='cityName'>
    {currentCity}
  </div>
  )
}

export default City