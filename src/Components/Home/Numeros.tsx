import casa from '../../Images/imgnumeros/casa.png'
import coracao from '../../Images/imgnumeros/coracao.png'
import gostos from '../../Images/imgnumeros/gostos.png'
import megafone from '../../Images/imgnumeros/megafone.png'
import pessoas from '../../Images/imgnumeros/pessoas-juntas.png'
import '../../CSS/Home/numeros.css'

export default function Numeros(){
    return(
        <section id="numeros">
           <article>
                <img src={casa} id="ajtam"/>
                <h3 id="fontetam">Doações</h3>
           </article>
           <article>
                <img src={coracao} id="ajtam"/>
                <h3 id="fontetam">Vidas Impactadas</h3>

           </article>
           <article>
                <img src={gostos} id="ajtam"/>
                <h3 id="fontetam">Pessoas ajudadas</h3>

           </article>
           <article>
                <img src={megafone} id="ajtam"/>
                <h3 id="fontetam">Campanhas</h3>

           </article>
           <article>
                <img src={pessoas} id="ajtam"/>
                <h3 id="fontetam">Voluntários</h3>

           </article>
        </section>
    )
}