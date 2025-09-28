import house from '../../Images/imgNovasCam/home.png'
import '../../CSS/Doador/Campanhas.css'

export default function Campanhas(){
    return(
        <section id="Campanhas">
            <article id="house">
                <img src={house} id="novascam"/>
            </article>
            <article id="house">
                <img src={house} id="novascam"/>
            </article>
            <article id="house">
                <img src={house} id="novascam"/>
            </article>
        </section>
    )
}