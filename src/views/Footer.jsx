import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Grid } from '@material-ui/core';

import './Footer.css';

function Footer() {
    return (
        <div>
            <Grid 
            container
            className="page-footer"> 
                 <ul>
                    <li>
                        <Link to="/contacto"><button type="submit" className="btn-footer">Contactanos</button></Link>
                    </li>                   
                 </ul>
                <Grid
                container
                className="rrss">
                 <ul>
                    <li>
                       <h3>Tambien nos encontramos en redes sociales</h3>
                    </li>
                 </ul>
                </Grid>
                <Grid 
                container
                className="icons">   
                    <a href="https://www.facebook.com/profile.php?id=" alt="Abrir facebook" target="_blank" ><img src='../imgs/icon1-facebook.png' /></a>
                    <a href="https://instagram.com/dravivianacellutti?igshid=MzRlODBiNWFlZA==" alt="Abrir instagram" target="_blank" ><img src='../imgs/icon2-instagram.png' /></a>
                    <a href="https://api.whatsapp.com/send?phone=+543513335473&text=Me contacto desde la web: info...?" alt="Abrir WhatsApp" target="_blank" ><img src='./imgs/icon3-whatsapp.png'/></a>        
                </Grid>
                <Grid 
                    container
                    className="datos-ubicacion-titulo" >
                    <ul>
                        <li className="li-horario">Nuestros horarios</li>
                        <li className="li-direccion">Nos encontramos</li>
                        <li className="li-telefono">Telefono de contacto</li>
                    </ul>
                </Grid>
                <Grid 
                    container
                    className="datos-ubicacion" >
                    <ul className="ul-ubicacion">
                        <li className="li-1">Lunes a Viernes: 8 AM a 20 PM </li>
                        <li className="li-2">Roma 264 Barrio Gral Paz X5000 Córdoba</li>
                        <li className="li-3">Whatsapp (351) 3335473</li>
                    </ul>
                </Grid>
                <Grid
                    container
                    className="copyright" item xs={12}>
                    <p className="p-footer" >Copyright© 2023 www.medicinaintegrativacba.com  Todos los derechos reservados By NAOKI solutions </p>
                    <img className="logo-footer" src='./imgs/logoNaoky.png' alt='Logo Naoki' />
                </Grid>
            </Grid>
            <Outlet />
        </div> 
    )
};

export default Footer;