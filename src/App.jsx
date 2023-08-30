import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import React from 'react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Bioquimica from './pages/Bioquimica';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Cosmiatria from './pages/Cosmiatria';
import DermoEstetica from './pages/DermoEstetica';
import Fisioterapia from './pages/Fisioterapia';
import Nutricion from './pages/Nutricion';
import Pacientes from './pages/Pacientes';
import TratamLaser from './pages/TratamLaser';
import NoPage from './pages/NoPage';

import './App.css';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='Bioquimica' element={<Bioquimica/>}/>
          <Route path='Blogs' element={<Blogs/>}/>
          <Route path='Contacto' element={<Contact/>}/>
          <Route path='Cosmiatria' element={<Cosmiatria />}/> 
          <Route path='DermoEstetica' element={<DermoEstetica />}/>
          <Route path='Fisioterapia' element={<Fisioterapia />}/>
          <Route path='Nutricion' element={<Nutricion />}/>
          <Route path='Pacientes' element={<Pacientes />}/>
          <Route path='TratamLaser' element={<TratamLaser />}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
