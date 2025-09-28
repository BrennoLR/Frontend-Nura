import '../../CSS/Home/Header.css';
import logoNura from '../../Images/imgheader/logonura.png';
import user from '../../Images/imgheader/user.png'

export default function Headers() {
  return (
    <header id="header">
      <img src={logoNura} id="logoNura"/>
      <input type="search" name="" id="btnpesquisar" />

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
      <img src={user} id="user" />
    </header>
  );
}