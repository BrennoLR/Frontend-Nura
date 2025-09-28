import Campanhas from "../Components/Doador/Campanhas";
import Campanhas2 from "../Components/Doador/Campanhas2";
import Header from "../Components/Doador/Header";
import Inicial from "../Components/Doador/Inicial";
import Ultdoacoes from "../Components/Doador/Ultdoacoes";
import Importancia from "../Components/Doador/importancia";
import Footer from "../Components/Home/Footer";


export default function Doador(){
    return(
        <>
        <Header />
        <Inicial />
        <Campanhas />
        <Ultdoacoes />
        <Campanhas2 />
        <Importancia />
        <Footer />
        </>
    )
}