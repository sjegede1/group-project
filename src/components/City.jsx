import React,{useContext} from 'react'
import {AppContext} from '../contexts/context'


function City() {
  let {data} = useContext(AppContext)
  const loaded = ()=>{
      return (
    <div className='city'>
       {data.location.name}, {data.location.region}{/*, {data.location.country} */}
    </div>
  )
  }
  const loading = ()=>{
    return(
      <div>Loading...</div>
    )
  }
  
  return data?loaded():loading()
}

export default City