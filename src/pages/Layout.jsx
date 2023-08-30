import { Outlet, Link} from "react-router-dom";

function Layout(){
    return(
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
                        <Link to="/contact">Contacto</Link>
                    </li> 
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout;