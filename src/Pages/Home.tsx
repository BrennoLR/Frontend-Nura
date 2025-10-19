import Campanhas from '../Components/Home/Campanhas';
import Doe from '../Components/Home/Doe';
import FAQ from '../Components/Home/FAQ';
import Slider from '../Components/Home/Slider';
import Voluntariado from '../Components/Home/Voluntaria';
import Footer from '../Components/Home/Footer';
import Headers from '../Components/Home/Header';
import Inicial from '../Components/Home/Inicial';
import Numeros from '../Components/Home/Numeros';
//import ONGs from '../Components/Home/ONGs';
//import SliderDuplo from '../Components/Home/SliderDuplo';

export default function Home() {
  return (
    <>
      <Headers />
      <Inicial />
      <Slider/>
      <Campanhas />
      <Numeros/>
      <Voluntariado />
      <Doe/>
      <FAQ/>
      <Footer />
    </>
  );
}