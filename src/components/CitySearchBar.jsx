import React, {useContext,useEffect,useState} from 'react'
import {AppContext} from '../contexts/context'

function CitySearchBar() {
  // let {location,setLocation,getData}=useContext(AppContext)
  // const handleSubmit = (event)=>{
  //   event.preventDefault()
  //   getData()
  // }
  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" id="usrInput" name="usrInput" value={location} onChange={(event)=>{
  //         setLocation(event.target.value)
  //       }}/>
  //       <input type="submit" value="submit"/>
  //     </form>
  //   </div>
  // )
  let {location,setLocation,getData}=useContext(AppContext)
  // const [newLocal,setNewLocal]=useState({area:""})
  const handleSubmit = (event)=>{
    event.preventDefault()
    getData(location.area)

  }
  const handleChange=(event)=>{
    setLocation({...location,[event.target.name]:event.target.value})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="area" name="area" value={location.area} onChange={handleChange}/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default CitySearchBar