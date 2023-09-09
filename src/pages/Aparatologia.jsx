import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import App2 from '../imgs/img-2.jpeg';
import App6 from '../imgs/img-6.jpeg';
import App7 from '../imgs/img-7.jpeg';
import App8 from '../imgs/img-8.jpeg';
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
                    imgSrc={App2}
                    alt="Vivi"
                    name="Viviana Cellutti MP 21864 ME 7371"
                    title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 2 */}
                <AparatologiaCard
                    imgSrc={App6}
                    alt="Vivi"
                    name="Viviana Cellutti MP 21864 ME 7371"
                    title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 3 */}
                <AparatologiaCard
                    imgSrc={App7}
                    alt="Vivi"
                    name="Viviana Cellutti MP 21864 ME 7371"
                    title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 4 */}
                <AparatologiaCard
                    imgSrc={App8}
                    alt="Vivi"
                    name="Viviana Cellutti MP 21864 ME 7371"
                    title="Medica Cirujana - Docente Universitaria"
                />

            </Grid>
            <Outlet />
        </div>
    )

}

export default Aparatologia;

