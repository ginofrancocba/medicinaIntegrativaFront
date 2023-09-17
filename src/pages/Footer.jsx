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
                        <Link to="/contacto"><button type="submit" className="btn btn-primary">Contactanos!</button></Link>
                    </li>
                 </ul>
                <Grid 
                container
                className="icons">
                    
                    <a href="https://www.facebook.com/profile.php?id=" alt="Abrir facebook" target="_blank" ><img src='../imgs/icon1-facebook.png' /></a>
                    <a href="https://instagram.com/" alt="Abrir instagram" target="_blank" ><img src='../imgs/icon2-instagram.png' /></a>
                    <a href="https://api.whatsapp.com/Me contacto desde la web: info...?" alt="Abrir WhatsApp" target="_blank" ><img src='./imgs/icon3-whatsapp.png'/></a> 
                   
                </Grid>
                <Grid
                    container
                    className="copyright" item xs={12}>
                    <p>Copyright© 2023 www..com </p>
                    <p>Todos los derechos reservados. By NAOKI solutions</p> 
                    <img src='./imgs/logoNaoky.png' alt='Logo Naoki' />
                </Grid>
            </Grid>
            <Outlet />
         </div> 
    )
};

export default Footer;