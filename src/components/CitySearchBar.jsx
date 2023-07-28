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
          Submit
        </button>
      </form>
    </div>
  )
}

export default CitySearchBar