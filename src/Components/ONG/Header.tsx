import { BiSolidBellRing } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import logoNura from "../../Images/assets/Geral/logonura.png";
import '../../CSS/ONG/Header.css'

export default function Header() {
    return (
        <header id='header'>
            <img src={logoNura} alt="Nura" id='nuraLogo' />
            <div>
                <BiSolidBellRing id='sinoIcon' />
            </div>
            <FaUserCircle id='userIcon' />
        </header>
    )
}