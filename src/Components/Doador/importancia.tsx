import '../../CSS/Doador/importancia.css'
import criancas from '../../Images/assets/Doador/1693422014373.png'

export default function importancia(){
    return(
        <section id="importancia">
            <article id="texto1">
                <h1><br />Sua contribuição fortalece projetos sociais e garante recursos para ações essenciais. 
                    Além disso, ao apoiar uma ONG, você amplia a rede de solidariedade e ajuda a dar 
                    visibilidade a causas importantes, incentivando outras pessoas a também fazerem a 
                    diferença. </h1>
            </article>
            <img src={criancas} id="imgcri"/>

        </section>
    )
}