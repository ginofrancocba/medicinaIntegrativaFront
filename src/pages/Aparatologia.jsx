import { Outlet } from "react-router-dom";
import {Grid} from '@material-ui/core';
import App2 from '../imgs/img-2.jpeg';
import App6 from '../imgs/img-6.jpeg';
import App7 from '../imgs/img-7.jpeg';
import App8 from '../imgs/img-8.jpeg';
import './Aparatologia.css';


function Aparatologia(){

    return (
    <div>
    <Grid
     container
     className='image-container-aparatologia'>
        <h1 className="h1-aparatologia">Contamos con aparatologia de ultima generacion !!!</h1>
        <img src={App2} alt='Aparato 2' /> 
        <img src={App6} alt='Aparato 6' /> 
        <img src={App7} alt='Aparato 7' /> 
        <img src={App8} alt='Aparato 8' /> 
    </Grid>
    <Outlet />
</div>
)

}

export default Aparatologia;

