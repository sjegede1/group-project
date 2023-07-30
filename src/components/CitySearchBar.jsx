import React, {useContext,useEffect,useState} from 'react'
import {AppContext} from '../contexts/context'

function CitySearchBar() {

  let {location,setLocation,getData}=useContext(AppContext)
  const handleSubmit = (event)=>{
    event.preventDefault()
    getData(location.area)

  }
  const handleChange=(event)=>{
    setLocation({...location,[event.target.name]:event.target.value})
  }
  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit} className='search-bar-form'>
        <input type="text" id="area" name="area" value={location.area} onChange={handleChange} className='search-bar-input' />
        <button type="submit" className='submit-button'>
          <img src="https://www.iconexperience.com/_img/i_collection_png/32x32/plain/magnifying_glass.png" alt="" className='nav-icon' />
        </button>
      </form>
    </div>
  )
}

export default CitySearchBar