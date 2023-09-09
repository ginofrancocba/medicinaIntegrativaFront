import { Outlet, Link } from "react-router-dom";
import {Grid} from '@material-ui/core';
import Vivi from '../imgs/img-1.jpeg';
import './Contacto.css';


function Contact(){

    return (
    <div>
    <Grid
     container
     className='image-container-contacto'>
        <h1 className="h1-contacto">Bienvenidos al centro de medicina integrativa !!!</h1>
        <h2 className="h2-contacto">Relaciones intitucionales y manager administracion gral...</h2>
        <img src={Vivi} alt='Vivi' /> 
    </Grid>
    <Outlet />
</div>
)

}

export default Contact;

