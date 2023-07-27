import {createContext,useState} from 'react'
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [data,setData]=useState(null)
    const [searchWord,setSearchWord]=useState({searchTerm:""})
    const getData = async()=>{
        let res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=3ba0d5cb39744d22b5c51914232601&q=${searchTerm}&days=3&aqi=no&alerts=no`)
        console.log(res)
        setData(res.data)
    }
    return(
        <AppContext.Provider value={{data,setData,getData}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider