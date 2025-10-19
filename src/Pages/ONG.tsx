import MinhasCampanhas from '../Components/ONG/MinhasCampanhas';
import Doacoes from '../Components/ONG/DoacoesRecebidas';
import Sessaoinicial from '../Components/ONG/SessaoInicial';
import Eventos from '../Components/ONG/Eventos';
import Relatorios from '../Components/ONG/Relatorios';
//import Footer from '../Components/ONG/Footer';
import Headers from '../Components/Home/Header';

export default function ONG() {
  return (
    <>
      <Headers />
      <Sessaoinicial />
      <MinhasCampanhas />
      <Relatorios />
      <Doacoes/>
      <Eventos/>
    </>
  );
}