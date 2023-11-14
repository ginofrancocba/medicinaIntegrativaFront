import React from 'react';
import { Grid } from '@material-ui/core';
import './Home.css';


function Home ()  {
    return (
            <div>
                <Grid 
                 className='cont1-home' container>
                    <h1 className="h1-home">Bienvenidos al centro de medicina integrativa </h1>
                </Grid>
                <Grid
                    className='image-container'>
                        <Grid className='front-img' item xs={12}>
                            <img src='../imgs/Frente2.jpg' alt='Vivi' /> 
                        </Grid>
                        <Grid>
                                <p className="lead text-center">El Secreto de una Piel Resplandeciente. 
                                 En nuestra clínica, la salud estética dermatológica es más que una meta; es una pasión. 
                                 Te brindamos una experiencia única donde la ciencia dermatológica y las terapias naturales 
                                 se fusionan para rejuvenecer tu piel.
                                 Desde tratamientos antienvejecimiento hasta soluciones para problemas dermatológicos 
                                 específicos, estamos comprometidos a ayudarte a lograr una piel que refleje vitalidad y 
                                 bienestar.</p>
                        </Grid>
                </Grid> 
            </div>
    );
}

export default Home;