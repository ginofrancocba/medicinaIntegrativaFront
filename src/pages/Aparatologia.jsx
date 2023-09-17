import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import './Aparatologia.css';


function AparatologiaCard({ imgSrc, alt, name, title }) {

    return (
        <Card className='aparatologia-card'>
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


function Aparatologia() {

    return (
        <div>
            <Grid
                container
                className='image-container-aparatologia'>
                <h1 className="h1-aparatologia">Contamos con aparatologia de ultima generacion !!!</h1>
                {/* Tarjeta 1 */}
                <AparatologiaCard
                    imgSrc='../imgs/img-2.jpeg'
                    alt="Vivi"
                    name="Viviana Cellutti MP 21864 ME 7371"
                    title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 2 */}
                <AparatologiaCard
                    imgSrc='../imgs/img-6.jpeg'
                    alt="Vivi"
                    name="Viviana Cellutti MP 21864 ME 7371"
                    title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 3 */}
                <AparatologiaCard
                    imgSrc='../imgs/img-7.jpeg'
                    alt="Vivi"
                    name="Viviana Cellutti MP 21864 ME 7371"
                    title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 4 */}
                <AparatologiaCard
                    imgSrc='../imgs/img-8.jpeg'
                    alt="Vivi"
                    name="Viviana Cellutti MP 21864 ME 7371"
                    title="Medica Cirujana - Docente Universitaria"
                />

            </Grid>
            <Outlet />
        </div>
    );
}

export default Aparatologia;

