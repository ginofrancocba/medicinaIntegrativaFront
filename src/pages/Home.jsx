import React from 'react';
import {Grid} from '@material-ui/core';
import logo from '../imgs/logo.jpeg';
import './Home.css';


function Home ()  {
    return (
    <div>
        <Grid 
            container
            direction='column'
            alignItems='center'
            style={{minHeight: '100vh'}}>
            <Grid item xs={12}>
            <img src={logo} alt='Logo' />
            </Grid>
        </Grid>
     
    </div>
    );
}

export default Home;