import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Footer from './pages/Footer';

import Contact from './pages/Contact';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Blogs from './pages/Blogs';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='Blogs' element={<Blogs/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
