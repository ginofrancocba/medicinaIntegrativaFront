import { BrowserRouter, 
         Routes, 
         Route,  
         Outlet
       } from 'react-router-dom';
import Aparatologia from './pages/Aparatologia';
import React from 'react';
import Bioquimica from './pages/Bioquimica';
import Contacto from './pages/Contacto';
import Cosmiatria from './pages/Cosmiatria';
import DermoEstetica from './pages/DermoEstetica';
import Fisioterapia from './pages/Fisioterapia';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Nutricion from './pages/Nutricion';
import Pacientes from './pages/Pacientes';
import Profesionales from './pages/Profesionales';
import Servicios from './pages/Servicios';
import Tratamientos from './pages/Tratamientos';
import Footer from './pages/Footer';
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
