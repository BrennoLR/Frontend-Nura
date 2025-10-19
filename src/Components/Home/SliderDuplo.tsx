import react from 'react';
import Slider from './Slider';
import '../../CSS/Home/sliderDuplo.css';

// Importe suas imagens aqui
// Slider 1

import slider1_img1 from '../../Images/assets/Home/slider/florest.jpg';
import slider1_img2 from '../../Images/assets/Home/slider/animal.jpeg';
import slider1_img3 from '../../Images/assets/Home/slider/animalSilvestre.jpeg'

// Slider 2
import slider2_img1 from '../../Images/assets/Home/slider/pequenos.jpeg';
import slider2_img2 from '../../Images/assets/Home/slider/pessoasmãos.jpeg';
import slider2_img3 from '../../Images/assets/Home/slider/Silvestre.jpeg';

const DualSlider = () => {
  const slider1Images = [slider1_img1, slider1_img2, slider1_img3];
  const slider2Images = [slider2_img1, slider2_img2, slider2_img3];

  return (
    <div className="conteinerDuploSlider">
      <div id="slide1" className="colunaSlide">
        <Slider images={slider1Images} id="slider1" autoPlayDelay={3000}
        />
      </div>
      
      <div id="slide2" className="colunaSlide">
        <Slider 
          images={slider2Images} 
          id="slider2"
          autoPlayDelay={3500} // Velocidade diferente para criar efeito interessante
        />
      </div>
    </div>
  );
};

export default DualSlider;

