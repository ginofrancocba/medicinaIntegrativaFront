import React from 'react';
import {Grid} from '@material-ui/core';

import './Servicios.css';

function Servicios() {
    return 
         <div>
             <Grid 
                 container
                       className="container-layoutServicios">
                        <nav className="navbar-servicios navbar-expand-lg bg-dark"></nav>
              </Grid>
              <Outlet />
                    <h1>Esta pagina es para Servicios</h1>
         </div> 
}

export default Servicios;