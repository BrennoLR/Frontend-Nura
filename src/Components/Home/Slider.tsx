import { useState, useEffect, useRef } from 'react';
import '../../CSS/Home/Slider.css';

// Importe suas imagens aqui
import ambiental from '../../Images/assets/Home/slider/florest.jpg';
import animal from '../../Images/assets/Home/slider/cachorrinho.jpg';
import animalSilvestre from '../../Images/assets/Home/slider/Alcie2.jpg';
import pequenos from '../../Images/assets/Home/slider/crianONg.jpg';
import pessoasmãos from '../../Images/assets/Home/slider/ben-wicks-iDCtsz-INHI-unsplash.jpg';

const Slider = () => {
  const images = [ambiental, animal, animalSilvestre, pequenos, pessoasmãos];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Avança automaticamente a cada 3 segundos
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  // Detecta swipe em dispositivos touch
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe para esquerda - próximo slide
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe para direita - slide anterior
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  // Detecta scroll do mouse para navegação
  const handleWheel = (e) => {
    e.preventDefault();
    
    if (e.deltaY > 0) {
      // Scroll para baixo - próximo slide
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      // Scroll para cima - slide anterior
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section 
      className="conteinerSlide" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      <section 
        className="sliderTransicao"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <section key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </section>
        ))}
      </section>

      {/* Indicadores de navegação (pequenos pontos) */}
      <section className="sliderBolinha">
        {images.map((_, index) => (
          <button
            key={index}
            className={`bolinha ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </section>
    </section>
  );
};

export default Slider;

