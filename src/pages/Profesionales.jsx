import { Outlet, Link } from "react-router-dom";
import {Grid} from '@material-ui/core';
import Vivi from '../imgs/img-1.jpeg';
import Hidro1 from '../imgs/img-Hidro-1.jpeg';
import './Profesionales.css';


function Profesionales(){

    return (
        <div>
            <Grid
             container
             className='image-container-profesionales'>
            <h1 className="h1-profesionales">Nuestros Profesionales</h1>
            <img src={Vivi} alt='Vivi' /> 
            <img src={Hidro1} alt='imagen de la profesional' /> 
            <h3>Melisa Rolandi ENF MP 13937. NM 19</h3>
            <img src={Vivi} alt='Vivi' />
            <img src={Vivi} alt='Vivi' /> 
            <img src={Vivi} alt='Vivi' /> 
            <img src={Vivi} alt='Vivi' /> 
            <img src={Vivi} alt='Vivi' /> 
            <img src={Vivi} alt='Vivi' /> 
            <img src={Vivi} alt='Vivi' /> 
            <img src={Vivi} alt='Vivi' /> 
            <img src={Vivi} alt='Vivi' /> 
            <img src={Vivi} alt='Vivi' />  
            <img src={Vivi} alt='Vivi' /> 
            </Grid>
            <Outlet />
        </div>
        )
}
export default Profesionales;