import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import './Tratamientos.css';


function TratamientoCard({imgSrc, alt, name, title }) {

    return (
             <Card className='tratamiento-card'>
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


function Tratamientos(){

    return(
    
    <div>
    <Grid container className="image-container-tratamientos">
       <h1 className="h1-tratamientos">Esta pagina es para Tratamientos</h1>
       
        {/* Tarjeta 1 */}
        <TratamientoCard
            imgSrc='pegar img '
            alt="pegar img tratamiento-1"
            name="NOMBRE y DESCRIPCION"
            title="DESCRIPCION"
        />
  
        {/* Tarjeta 2 */}
        <TratamientoCard
            imgSrc='pegar img'
            alt="img tratamiento-2"
            name="NOMBRE y DESCRIPCION"
            title="DESCRIPCION"
        />

        {/* Tarjeta 3 */}
        <TratamientoCard
           imgSrc='pegar img'
           alt="img tratamiento-3"
           name="NOMBRE y DESCRIPCION"
           title="DESCRIPCION DE TRATAMIENTO"
        />

        {/* Tarjeta 4 */}
        <TratamientoCard
           imgSrc='pegar img'
           alt="img tratamiento-4"
           name="NOMBRE y DESCRIPCION"
           title="DESCRIPCION"
        />

            {/* Tarjeta 5 */}
            <TratamientoCard
           imgSrc='pegar img'
           alt="img tratamiento-5"
           name="NOMBRE y DESCRIPCION"
           title="DESCRIPCION"
        />

        {/* Tarjeta 6 */}
        <TratamientoCard
           imgSrc='pegar img'
           alt="img tratamiento-6"
           name="NOMBRE y DESCRIPCION"
           title="DESCRIPCION"
        />
    </Grid>
    </div>
    );
}

export default Tratamientos;