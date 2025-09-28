import Crianca from '../../Images/imgFAQ/criança.webp'
import '../../CSS/Home/FAQ.css'

export default function FAQ(){
    return(
        <section id="FAQ">
            <img src={Crianca} id="imgcrianca"/>
            <div id="Perguntas">
                <ul id="lista">
                    <h3>Perguntas frequentes</h3>
                    <li id="liss">+ Como funciona o processo de verificação das ONGs?</li>
                    <hr />
                    <li id="liss">+ O que significa "ONG em destaque"?</li>
                    <hr />
                    <li id="liss">+ Como posso entrar em contato com uma ONG específica?</li>
                    <hr />
                    <li id="liss">+ Como funciona o processo de verificação das ONGs?</li>
                    <hr />
                </ul>
            </div>
        </section>
    )
}