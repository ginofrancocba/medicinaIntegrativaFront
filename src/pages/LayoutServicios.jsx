import { Outlet, Link } from "react-router-dom";
import {Grid} from '@material-ui/core';
import './LayoutServicios.css';

function LayoutServicios() {
    return (
        <div>
            <Grid 
                container className="container-layoutServicios">
                  
                    <nav className="navbar-servicios navbar-expand-lg bg-dark">
                        <ul>
                            <li>
                              <Link to="/">Servicios</Link>
                            </li>
                            <li>
                              <Link to="/bioquimica">Bioquimica</Link>
                            </li>
                            <li>
                               <Link to="/cosmiatria">Cosmiatria</Link>
                            </li>
                            <li>
                               <Link to="/dermoEstetica">DermoEstetica</Link>
                            </li>
                            <li>
                               <Link to="/fisioterapia">Fisioterapia</Link>
                            </li>
                            <li>
                               <Link to="/nutricion">Nutricion</Link>
                            </li>
                            <li>
                               <Link to="/tratamLaser">TratamLaser</Link>
                            </li>
                        </ul>
                    </nav>
            </Grid>
            <Outlet />
        </div>
    )
}

export default LayoutServicios;