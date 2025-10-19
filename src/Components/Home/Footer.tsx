import logonurafooter from '../../Images/assets/Geral/logo.png'
import x from '../../Images/assets/Geral/x.svg'
import youtube from '../../Images/assets/Geral/youtube.png'
import instagram from '../../Images/assets/Geral/instagram.png'
import '../../CSS/Home/Footer.css'

export default function Footer(){
    return(
        <section id="footer">
        <article id="tam">
            <ul id="listafooter">
                <li id="title">Como ajudar</li>
                <li>Quero criar uma ONG</li>
                <li>Seja voluntário</li>
                <li>Doações</li>
                <li>Quero ser um patrocinador</li>
            </ul>
        </article>
        <article id="tam">
            <ul id="listafooter">
                <li id="title">Quem somos?</li>
                <li>Equipe</li>
                <li>Patrocinadores</li>
                <li>Missão</li>
            </ul>
        </article>
        <article id="tam">
            <img src={logonurafooter} id="nurafooter"/>
            <ul id="listafooter">
                <li>Contato</li>
                <li>Nura@gmail.com</li>
                <li>(xx) xxxxx-xxxx</li>
            </ul>
            <div id="Redessociais">
                <img src={youtube} id="redestam"/>
                <img src={x} id="redestam"/>
                <img src={instagram} id="redestam"/>
            </div>
        </article>
        </section>
    )
}