import React from 'react';
import {Grid} from '@material-ui/core';
import logo from '../imgs/logo.jpeg';
import Vivi from '../imgs/img-1.jpeg';
import Footer from '../pages/Footer';
import './Home.css';


function Home ()  {
    return (
         <div>
             <Grid 
                 container
                    className='image-container'
                        style={{minHeight: '100vh'}}>
                        <Grid className='header' item xs={12}>
                            <img src={logo} alt='Logo' />
                            <img src={Vivi} alt='Vivi' />
                        </Grid>
             <Grid 
                 container>
                      <h1 className="h1-home">Bienvenidos a nuestro home !!!</h1>
                      <h2 className="h2-home">Somos una empresa dedicada a la Medicina Integrativa</h2>
                      <p className="lead text-center">El Secreto de una Piel Resplandeciente. 
                       En nuestra clínica, la salud estética dermatológica es más que una meta; es una pasión. 
                       Te brindamos una experiencia única donde la ciencia dermatológica y las terapias naturales 
                       se fusionan para rejuvenecer tu piel.
                       Desde tratamientos antienvejecimiento hasta soluciones para problemas dermatológicos 
                       específicos, estamos comprometidos a ayudarte a lograr una piel que refleje vitalidad y 
                       bienestar.</p>
             </Grid>
             </Grid> 
             <Grid container>
            <Footer/>
        </Grid>
    </div>
  
    );
}

export default Home;