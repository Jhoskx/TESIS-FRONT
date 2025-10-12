import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcom from './Components/Welcom';
import InitialData from './Components/InitialData';
import Description from './Components/Description';
import TablaConRegistros from './Components/UseCases'
import ListOfResources from './Components/ListOfResources'
import Reply from './Components/reply'
import Layout from './Components/InfoResource';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/Question' element={<InitialData />} />
//         <Route path='/Description' element={<Description />} />
//         <Route path='/UseCase' element={<TablaConRegistros />} />
//         <Route path='/ListOfResources' element={<ListOfResources />} />
//         <Route path='/Reply' element={<Reply />} />
//         <Route path='/' element={<Welcom/>} />
//       </Routes>
//     </Router>
//   );
// };

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas sin Layout */}
        <Route path="/" element={<Welcom />} />
        <Route path="/Question" element={<InitialData />} />
        <Route path="/Description" element={<Description />} />
        <Route path="/Reply" element={<Reply />} />

        {/* Rutas con Layout */}
        <Route element={<Layout />}>
          <Route path="/UseCase" element={<TablaConRegistros />} />
          <Route path="/ListOfResources" element={<ListOfResources />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
