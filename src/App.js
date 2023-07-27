import logo from './logo.svg';
import './App.css';
import {useEffect,useState,useContext} from 'react';
import {AppContext} from './contexts/context';
import {Route, Routes} from "react-router-dom"

function App() {
  let {getData} = useContext(AppContext)
  useEffect(()=>{
    getData();
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
