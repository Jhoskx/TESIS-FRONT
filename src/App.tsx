import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';
import Welcom from './Components/Welcom';
import InitialData from './Components/InitialData';


function App() {
  return (
<Router>
  <Routes>
    <Route path='/Question' Component={InitialData}/>
    <Route path='/' Component={Welcom}/>
  </Routes>
</Router>
    
  );
}

export default App;
