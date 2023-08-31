import { Outlet, Link } from "react-router-dom";
import './Layout.css';

function Layout() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>

                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/servicios">Servicios</Link>
                    </li>

                    <li>
                        <Link to="/pacientes">Pacientes</Link>
                    </li>

                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout;