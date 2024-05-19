import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';
import Welcom from './Components/Welcom';
import InitialData from './Components/InitialData';
import Description from './Components/Description';
import TablaConRegistros from './Components/TablaConRegistros'
import ListOfResources from './Components/ListOfResources'
import Reply from './Components/reply'

function App() {
  return (
  <Routes>
    <Route path='/Question' Component={InitialData}/>
    <Route path='/Description' Component={Description}/>
    <Route path='/TablaConRegistros' Component={TablaConRegistros}/>
    <Route path='/ListOfResources' Component={ListOfResources}/>
    <Route path='/Reply' Component={Reply}/>
    <Route path='/' Component={Welcom}/>
  </Routes>
    
  );
}

export default App;
