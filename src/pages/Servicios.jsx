import { Link } from "react-router-dom";
import './Servicios.css';

function Servicios() {

  return (
    <div className="servicio">
        <h1>Esta pagina es para Servicios</h1>
            <nav className="navbar navbar-expand-lg bg-dark">
                <ul>
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
    </div>
  )
}

export default Servicios;