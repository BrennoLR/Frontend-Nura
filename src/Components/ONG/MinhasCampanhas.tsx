import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import '../../CSS/ONG/MinhasCampanhas.css'

//Funções
export default function MinhasCampanhas() {

    const campanhas = [
        { titulo: "Campanha 1", descricao: "Descrição da Campanha 1" },
        { titulo: "Campanha 2", descricao: "Descrição da Campanha 2" },
        { titulo: "Campanha 3", descricao: "Descrição da Campanha 3" },
        { titulo: "Campanha 4", descricao: "Descrição da Campanha 4" },
        { titulo: "Campanha 5", descricao: "Descrição da Campanha 5" },
        { titulo: "Campanha 6", descricao: "Descrição da Campanha 6" },
        { titulo: "Campanha 7", descricao: "Descrição da Campanha 7" },
        { titulo: "Campanha 8", descricao: "Descrição da Campanha 8" },
        { titulo: "Campanha 9", descricao: "Descrição da Campanha 9" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

 const handlePrev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
    }
};

const handleNext = () => {
    if (currentIndex + itemsPerPage < campanhas.length) {
        setCurrentIndex(currentIndex + 1);
    }
};

    const campanhasVisiveis = campanhas.slice(currentIndex, currentIndex + itemsPerPage);

    //Sessão
    return (
        <section className='secondary-section'>
            <h1 className='secondary-section-title'>Minhas Campanhas</h1>
            <div className='campaigns-container'>
                <IoIosArrowBack
                    className='left-arrow'
                    onClick={handlePrev}
                    style={{
                        cursor: currentIndex === 0 ? 'default' : 'pointer',
                        opacity: currentIndex === 0 ? 0.3 : 1
                    }}
                />
                {
                    campanhasVisiveis.map((campanha, index) => (
                        <div key={index} className='campaign-card'>
                            <div className='campaign-image'></div>
                            <h2 className='campaign-title'>{campanha.titulo}</h2>
                            <p className='campaign-description'>{campanha.descricao}</p>
                        </div>
                    ))
                }
                <IoIosArrowForward
                    className='right-arrow'
                    onClick={handleNext}
                    style={{
                        cursor: currentIndex + itemsPerPage >= campanhas.length ? 'default' : 'pointer',
                        opacity: currentIndex + itemsPerPage >= campanhas.length ? 0.3 : 1
                    }}
                />
            </div>
        </section>
    )
}