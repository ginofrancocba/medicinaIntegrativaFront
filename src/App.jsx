import { BrowserRouter, 
  Routes, 
  Route,  
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';
import React from 'react';
import Bioquimica from './pages/Bioquimica';
import Contact from './pages/Contact';
import Cosmiatria from './pages/Cosmiatria';
import DermoEstetica from './pages/DermoEstetica';
import Fisioterapia from './pages/Fisioterapia';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Nutricion from './pages/Nutricion';
import Pacientes from './pages/Pacientes';
import Profesionales from './pages/Profesionales';
import Servicios from './pages/Servicios';
import TratamLaser from './pages/TratamLaser';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='Profesionales' element={<Profesionales />}/>
          <Route path='Contacto' element={<Contact />}/>
          <Route path='Pacientes' element={<Pacientes />}/>
          <Route path='Servicios' element={<Servicios />}/>
          <Route path='Bioquimica' element={<Bioquimica />}/>
          <Route path='TratamLaser' element={<TratamLaser />}/>
          <Route path='Cosmiatria' element={<Cosmiatria />}/> 
          <Route path='DermoEstetica' element={<DermoEstetica />}/>
          <Route path='Fisioterapia' element={<Fisioterapia />}/>
          <Route path='Nutricion' element={<Nutricion />}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
