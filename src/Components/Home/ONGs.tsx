import { useState } from 'react'
import ONG1 from '../../Images/assets/Home/Ongs/ONG1.png'
import ONG2 from '../../Images/assets/Home/Ongs/ONG2.png'
import ONG3 from '../../Images/assets/Home/Ongs/ONG3.png'
import '../../CSS/Home/ONGs.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ONGs() {

    const ONG = [
        { imagem: ONG1 },
        { imagem: ONG2 },
        { imagem: ONG3 },
        { imagem: ONG3 },
        { imagem: ONG2 },
        { imagem: ONG1 },
        { imagem: ONG2 },
        { imagem: ONG1 },
        { imagem: ONG3 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handlePrev = () => {
        if (currentIndex >= itemsPerPage) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    const handleNext = () => {
        if (currentIndex + itemsPerPage < ONG.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const ongVisiveis = ONG.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <section id="ONGs">
            <IoIosArrowBack
                id='left-arrow-ong'
                onClick={handlePrev}
                style={{
                    cursor: currentIndex === 0 ? 'default' : 'pointer',
                    opacity: currentIndex === 0 ? 0.3 : 1
                }}
            />
            {
                ongVisiveis.map((ong, index) => (
                    <div key={index} id='ong-card'>
                        <img id='tamimg' src={ong.imagem} />
                    </div>
                ))
            }
            <IoIosArrowForward
                id='right-arrow-ong'
                onClick={handleNext}
                style={{
                    cursor: currentIndex + itemsPerPage >= ONG.length ? 'default' : 'pointer',
                    opacity: currentIndex + itemsPerPage >= ONG.length ? 0.3 : 1
                }}
            />
        </section>
    )
}