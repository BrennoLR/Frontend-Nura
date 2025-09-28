import '../../CSS/Home/Inicial.css'
import imgInicial from '../../Images/imginicial/inicial.jpeg'

export default function Inicial() {
  return (
    <section id="Inicial">
        <h1 id="h1">Nura<br/>
        <p id="texto">
            Na Nura, nossa missão é ser a ponte que conecta, fortalece e amplifica a voz de
          diversas ONGs. Impulsionamos causas nobres, transformamos vidas através de projetos
          impactantes e inspiramos uma onda de mudanças reais e duradouras em toda a sociedade.</p></h1>
        <img src={imgInicial} id="imginicio"/>
    </section>
  );
}