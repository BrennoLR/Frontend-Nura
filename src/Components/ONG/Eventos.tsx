import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import '../../CSS/ONG/Eventos.css'

export default function Eventos() {
    return (
        <section id='eventosSessao'>
            <h1 id='eventosSessaoTitulo'>Eventos</h1>
            <div id='conteinerEventos'>
                <button id='buttonEventos'>Eventos Semanais<IoIosArrowDown id='setaButton' /></button><br />
                <button id='buttonEventos'>Eventos Mensais</button><br />
                <button id='buttonEventos'>Eventos Semestrais</button><br />
                <button id='buttonEventos'>Eventos Anuais</button>
            </div>
            <div id='cardConteinerEventos'>
                <IoIosArrowBack id='setaEsquerdaEvento' />
                <div id='cardCampanhaEvento'>
                    <div id='imgCampanhaEvento'>

                    </div>
                    <h2 id='tituloCampanhaEvento'>Campanha 1</h2>
                    <p id='descCampanhaEvento'>Descrição da Campanha 1</p>
                </div>
                <IoIosArrowForward id='setaDireitaEvento' />
            </div>
        </section>
    )
}