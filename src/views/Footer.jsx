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
                    className="datos-ubicacion" >
                    <ul>
                        <li>Nuestros Horarios Lunes a Viernes: 8 AM a 20 PM</li>
                        <li>Roma 264 Barrio Gral Paz X5000 Córdoba</li>
                        <li>Telefono de contacto: Whatsapp (351) 3 335473</li>
                    </ul>
                </Grid>
                <Grid
                    container
                    className="copyright" item xs={12}>
                    <p className="p-footer" >Copyright© 2023 www..com Todos los derechos reservados By NAOKI solutions </p>
                    <img className="logo-footer" src='./imgs/logoNaoky.png' alt='Logo Naoki' />
                </Grid>
            </Grid>
            <Outlet />
         </div> 
    )
};

export default Footer;