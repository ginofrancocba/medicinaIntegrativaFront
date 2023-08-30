import { Outlet, Link} from "react-router-dom";
import './Layout.css';

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
                        <Link to="/bioquimica">Bioquimica</Link>
                    </li> 
                    <li>
                        <Link to="/contacto">Contacto</Link>
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
                        <Link to="/pacientes">Pacientes</Link>
                    </li> 
                    <li>
                        <Link to="/tratamLaser">TratamLaser</Link>
                    </li> 
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout;