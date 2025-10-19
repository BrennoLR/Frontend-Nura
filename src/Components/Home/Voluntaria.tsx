import '../../CSS/Home/Voluntaria.css';
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Campanhas() {

    const voluntario = [
        { titulo: "Voluntario 1", descricao: "Descrição do Voluntario Destaque 1" },
        { titulo: "Voluntario 2", descricao: "Descrição do Voluntario Destaque 2" },
        { titulo: "Voluntario 3", descricao: "Descrição do Voluntario Destaque 3" },
        { titulo: "Voluntario 4", descricao: "Descrição do Voluntario Destaque 4" },
        { titulo: "Voluntario 5", descricao: "Descrição do Voluntario Destaque 5" },
        { titulo: "Voluntario 6", descricao: "Descrição do Voluntario Destaque 6" },
        { titulo: "Voluntario 7", descricao: "Descrição do Voluntario Destaque 7" },
        { titulo: "Voluntario 8", descricao: "Descrição do Voluntario Destaque 8" },
        { titulo: "Voluntario 9", descricao: "Descrição do Voluntario Destaque 9" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex + itemsPerPage < voluntario.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const voluntariosVisiveis = voluntario.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <section id='sessaoSegundaria'>
            <h1 id='sessaoSegundariaTitulo'>Voluntarios Destaques</h1>
            <div id='ConteinersVoluntario'>
                <IoIosArrowBack
                    id='setaEsquerdaVoluntarios'
                    onClick={handlePrev}
                    style={{
                        cursor: currentIndex === 0 ? 'default' : 'pointer',
                        opacity: currentIndex === 0 ? 0.1 : 1
                    }}
                />
                {
                    voluntariosVisiveis.map((voluntario, index) => (
                        <div key={index} id='cardVoluntarios'>
                            <div id='voluntarioImg'></div>
                            <h2 id='voluntarioTitulo'>{voluntario.titulo}</h2>
                            <p id='voluntarioDesc'>{voluntario.descricao}</p>
                        </div>
                    ))
                }
                <IoIosArrowForward
                    id='setaDireitaVoluntario'
                    onClick={handleNext}
                    style={{
                        cursor: currentIndex + itemsPerPage >= voluntario.length ? 'default' : 'pointer',
                        opacity: currentIndex + itemsPerPage >= voluntario.length ? 0.3 : 1
                    }}
                />
            </div>
        </section>
    )
}
