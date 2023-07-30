import React,{useContext} from 'react'
import {AppContext} from '../contexts/context'

function Uv() {
    let {data} = useContext(AppContext)
    const indexLevel=()=>{
        let indexL = data.current.uv
        if(indexL<3){
            return (
                <div>A great day to spend some time outside!</div>
            )
        }else if(indexL<8){
            return(
                <div>A pretty good day for photosynthesis!</div>
            )
        }else if(indexL>=8){
            return(
            <div>Warning! Sun protection recommended!</div>
            )
        }
    }
    const loaded = ()=>{
        return (
            <div className="uv">
                <img src="https://www.sknclinics.co.uk/wp-content/uploads/2018/07/UV-index-scale-scaled.jpg" alt="" className="uvInfo"/>
            <div>
                <h4>
                Current UV Index: {data.current.uv}</h4>
                </div>
                <h5>{indexLevel()}</h5>
                <img src="https://coalregioncanary.com/wp-content/uploads/2020/08/summer.gif" alt="" className="weatherGif"/>
            </div>
          )
    }
    const loading=()=>{
        <div>Loading...</div>
    }
  return data ? loaded():loading()
}

export default Uv