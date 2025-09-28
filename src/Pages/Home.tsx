import Campanhas from '../Components/Home/Campanhas';
import Doe from '../Components/Home/Doe';
import FAQ from '../Components/Home/FAQ';
import Footer from '../Components/Home/Footer';
import Headers from '../Components/Home/Header';
import Inicial from '../Components/Home/Inicial';
import Numeros from '../Components/Home/Numeros';
import ONGs from '../Components/Home/ONGs';

export default function Home() {
  return (
    <>
      <Headers />
      <Inicial />
      <Campanhas />
      <ONGs />
      <Numeros />
      <Doe />
      <FAQ />
      <Footer />
    </>
  );
}