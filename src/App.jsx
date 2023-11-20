import { BrowserRouter, 
         Routes, 
         Route,  
         Outlet
       } from 'react-router-dom';
import React from 'react';
import Aparatologia from './views/Aparatologia';
import Bioquimica from './views/Bioquimica';
import Contacto from './views/Contacto';
import Cosmiatria from './views/Cosmiatria';
import DermoEstetica from './views/DermoEstetica';
import Fisioterapia from './views/Fisioterapia';
import Footer from './views/Footer';
import Home from './views/Home';
import Layout from './views/Header';
import Login from './views/Login';
import NoPage from './views/NoPage';
import Nutricion from './views/Nutricion';
import Pacientes from './views/Pacientes';
import Profesionales from './views/Profesionales';
import Servicios from './views/Servicios';
import Tratamientos from './views/Tratamientos';
import './App.css';


function App() {

  return (
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<Layout />}>
             <Route index element={<Home />}/>
             <Route path='Profesionales' element={<Profesionales />}/>
             <Route path='Contacto' element={<Contacto />}/>
             <Route path='Login' element={<Login />}/>
             <Route path='Aparatologia' element={<Aparatologia />}/>
             <Route path='Pacientes' element={<Pacientes />}/>
             <Route path='Servicios' element={<Servicios />}/>
             <Route path='Bioquimica' element={<Bioquimica />}/>
             <Route path='Tratamientos' element={<Tratamientos />}/>
             <Route path='Cosmiatria' element={<Cosmiatria />}/> 
             <Route path='DermoEstetica' element={<DermoEstetica />}/>
             <Route path='Fisioterapia' element={<Fisioterapia />}/>
             <Route path='Nutricion' element={<Nutricion />}/>
             <Route path='*' element={<NoPage/>}/>
             </Route>      
          </Routes>
        <Footer />
        <Outlet />
      </BrowserRouter>
  )
}

export default App;
