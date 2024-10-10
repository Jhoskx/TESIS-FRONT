import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';
import Welcom from './Components/Welcom';
import InitialData from './Components/InitialData';
import Description from './Components/Description';
import TablaConRegistros from './Components/UseCases'
import ListOfResources from './Components/ListOfResources'
import Reply from './Components/reply'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/Question' element={<InitialData />} />
        <Route path='/Description' element={<Description />} />
        <Route path='/TablaConRegistros' element={<TablaConRegistros />} />
        <Route path='/ListOfResources' element={<ListOfResources />} />
        <Route path='/Reply' element={<Reply />} />
        <Route path='/' element={<Welcom/>} />
      </Routes>
    </Router>
  );
};

export default App;
