import '../../CSS/Home/Header.css'
import logoNura from '../../Images/assets/Geral/logonura.png';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Headers() {
  return (
    <header id="header">
      <img src={logoNura} id="logoNura" />
      <div id='pesquisar'>
        <input type="search" name="" className="btnpesquisar" />
        <FaMagnifyingGlass id='lupa' />
      </div>

      <nav>
        <ul id="listaheaderrr">
          <li>Sobre nos</li>
          <li>Destaques</li>
          <li>Campanhas</li>
          <li>Voluntariar-se</li>
          <li>ONG's</li>
          <li>Doe</li>
        </ul>
      </nav>
      <Link to={'/Login'}>
        <FaRegUserCircle className="user" />
      </Link>
    </header>
  );
}