import React from "react";
import { Outlet } from "react-router-dom";
import {Grid, Card, CardContent, Typography} from '@material-ui/core';
import Vivi from '../imgs/img-1.jpeg';
import './Contacto.css';


function ContactoCard({imgSrc, alt, name, title }) {

    return (
             <Card className='contacto-card'>
                <img src={imgSrc} alt={alt} />
                <CardContent>
                    <Typography variant="h6">{name}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="h6">{title}</Typography>
                </CardContent>
                </Card>
    );
}



function Contacto() {
    return (
       <div>
           <Grid
            container
            className='image-container-contacto'>
                <h1 className="h1-contacto">Centro de contacto medicina integrativa </h1>
                <h2 className="h2-contacto">Relaciones intitucionales y manager administracion gral...</h2>
                  
                {/* Tarjeta 1 */}
                <ContactoCard
                  imgSrc={Vivi}
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />
        
     
    </Grid>
    <Outlet />
</div>
);

}

export default Contacto;

