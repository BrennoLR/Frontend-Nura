import '../../CSS/Doador/Inicial.css'
import imginicio from '../../Images/imgInicia/1693422014373.png'

export default function Inicial(){
    return(
        <section id="Inicial">
            <h1 id="texto">Bem vindo a área de controle do Doador! <br /><br />
            Olá, [Nome do Doador]! Este é o seu espaço para acompanhar de 
            perto o impacto das suas doações e o progresso das causas que você apoia.
            <br /><br /> Por aqui você pode: Verificar doações, descobrir novas campanhas, acompanhar progresso das campanhas.</h1>
            <img src={imginicio} id="img"/>
        </section>
    )
}