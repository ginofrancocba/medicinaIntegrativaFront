import { Outlet, Link } from "react-router-dom";
import {Grid} from '@material-ui/core';
import logo from '../imgs/logo.jpeg';
import './Layout.css';

function Layout() {
    return (
        <div>
            <Grid 
                container className="container-layout">
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <ul>
                            <Grid className="logo">
                            <li>
                                <img src={logo} alt='Logo' />
                            </li> 
                            </Grid>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/profesionales">Profesionales</Link>
                            </li>
                            <li>
                                <Link to="/aparatologia">Aparatologia</Link>
                            </li>
                            <li>
                                <Link to="/contacto">Contacto</Link>
                            </li>
                            <li>
                                <Link to="/servicios">Servicios</Link>
                            </li>
                        </ul>
                    </nav>
            </Grid>
            <Outlet />
        </div>
    )
}

export default Layout;