// import './App.css';
import "./App.css"
import {useEffect,useState,useContext} from 'react';
import {AppContext} from './contexts/context';
import {Route, Routes} from "react-router-dom"
import Main from './pages/Main';
import Alerts from './pages/Alerts';

function App() {
  let {location,getData} = useContext(AppContext)
  useEffect(()=>{
    getData("dallas");
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </div>
  );
}

export default App;
