import '../../CSS/Home/Inicial.css'
import imgInicial from '../../Images/assets/Home/Inicial/inicial.jpeg'

export default function Inicial() {
  return (
    <section id="Inicial">
        <h1>nura<br/>
        <p className="textoInicial">
            Na Nura, nossa missão é ser a ponte que conecta, fortalece e amplifica a voz de
          diversas ONGs. Impulsionamos causas nobres, transformamos vidas através de projetos
          impactantes e inspiramos uma onda de mudanças reais e duradouras em toda a sociedade.</p></h1>
        <img src={imgInicial} id="imginicio"/>
    </section>
  );
}