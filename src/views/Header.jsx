import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import './Header.css';

function Header() {
    return (
        <div className="fixed-header">
            <Grid 
                container className="container-layout">
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <ul>
                            <Grid>
                            <li>
                                <img  className="logo" src='/imgs/logo.jpeg' alt='Logo' />
                            </li> 
                            </Grid>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/profesionales">Profesionales</Link>
                            </li>
                            <li>
                                <Link to="/tratamientos">Tratamientos</Link>
                            </li>
                            <li>
                                <Link to="/aparatologia">Aparatologia</Link>
                            </li>
                            <li>
                                <Link to="/contacto">Contacto</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
            </Grid>
            <Outlet />
        </div>
    )
}

export default Header;