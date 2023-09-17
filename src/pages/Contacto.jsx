import React from "react";
import { Outlet } from "react-router-dom";
import {Grid, Card, CardContent, Typography} from '@material-ui/core';
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
                  imgSrc=''
                  alt="imagen Belen"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />
<Grid item xs={12}>
    <div className="map-container">
<iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0654746918894!2d-64.16618002616343!3d-31.41232209605171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a342202c833b%3A0x41472b0a2acf78f1!2sMedicina%20Integrativa!5e0!3m2!1ses-419!2sar!4v1694253702133!5m2!1ses-419!2sar"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"

          ></iframe>
          </div>
</Grid>       
     
    </Grid>
    <Outlet />
</div>
);

}

export default Contacto;

