import logo from './logo.svg';
import './App.css';
import {useEffect,useState,useContext} from 'react';
import {AppContext} from './contexts/context'


function App() {
  let {getData} = useContext(AppContext)
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="App">
      here
    </div>
  );
}

export default App;
