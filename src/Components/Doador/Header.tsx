import '../../CSS/Doador/Header.css';
import logoNura from '../../Images/imgheader/logonura.png';
import user from '../../Images/imgheader/user.png'

export default function Header() {
  return (
    <header id="header">
      <img src={logoNura} id="logoNura"/>
      <input type="search" name="" id="btnpesquisar" />
      <nav>
        <ul id="listaheaderrrrrrrr">
          <li>Minhas doações</li>
          <li>Campanhas</li>
        </ul>
      </nav>
      <img src={user} id="user" />
    </header>
  );
}