import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import './Home.css';


function Home ()  {
    return (
            <div>
                <Grid 
                 className='cont1-home' container>
                    <h1 className="h1-home">Bienvenidos al centro de medicina integrativa </h1>
                </Grid>
                <Grid
                    className='image-container'
                        style={{minHeight: '100vh'}}>
                        <Grid className='header' item xs={12}>
                            <img src='../imgs/img-1.jpeg' alt='Vivi' /> 
                        </Grid>
                        <Grid 
                            container>
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
            </div>
    );
}

export default Home;