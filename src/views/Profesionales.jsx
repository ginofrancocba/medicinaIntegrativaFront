import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import './Profesionales.css';


function ProfesionalCard({imgSrc, alt, name, title }) {

    return (
             <Card className='profesional-card'>
                <img className="prof-card-img" src={imgSrc} alt={alt} />
                <CardContent>
                    <Typography variant="h6">{name}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="h6">{title}</Typography>
                </CardContent>
                </Card>
    );
}

function Profesionales() {
    return (
        <div>
            <Grid container className="image-container-profesionales">
               <h1 className="h1-profesionales">Destacados Profesionales</h1>
  
               {/* Tarjeta 1 */}
                <ProfesionalCard
                  imgSrc='../imgs/img-Vivi.jpeg'
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />
  
                {/* Tarjeta 2 */}
                <ProfesionalCard
                  imgSrc='../imgs/img-Hidro-1.jpeg'
                  alt="imagen de la profesional"
                  name="Melisa Rolandi ENF MP 13937 NM 19"
                  title="Enfermera Profesional"
                />

                {/* Tarjeta 3 */}
                <ProfesionalCard
                  imgSrc='../imgs/img-Cir-Plast.jpeg'
                  alt="imagen de la profesional"
                  name="Setti Romina MP 21864 ME 7371"
                  title="Med Cirujana Plastica"
                />
            </Grid>
            <Outlet />
        </div>
    );
  }
  
  export default Profesionales;

