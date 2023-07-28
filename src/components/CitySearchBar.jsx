import React, {useContext} from 'react'
import {AppContext} from '../contexts/context'

function CitySearchBar() {
  let {location,setLocation,getData}=useContext(AppContext)
  const handleSubmit = (event)=>{
    event.preventDefault()
    getData()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="usrInput" name="usrInput" value={location} onChange={(event)=>{
          setLocation(event.target.value)
        }}/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default CitySearchBar