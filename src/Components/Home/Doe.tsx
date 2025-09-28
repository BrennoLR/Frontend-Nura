import Cachorro from '../../Images/imgdoe/Cachorro.png'
import '../../CSS/Home/Doe.css'

export default function Doe(){
    return(
        <section id="Doe">
            <article>
                <h1 id="textodoe">Sua contribuição fortalece ONGs, amplia projetos, gera impacto social 
                e transforma vidas. 
                Juntos, somos a mudança que o mundo precisa.<br></br><br></br>
                </h1>
                <button id="btnDoe">Doe</button>
            </article>
            <img src={Cachorro} id="imgcachorro"/>
        </section>
    )
}