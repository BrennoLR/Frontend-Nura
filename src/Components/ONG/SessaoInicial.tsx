import cachorro from "../../Images/assets/Ong/Inicial/cachorro.jpg"
import '../../CSS/ONG/SessaoInicial.css'

export default function SessaoInicial() {
    return (

        <section id='sessaoInicial'>
            <p id='mensagemInicial'>
                Olá, [Nome da ONG]!<br /> Este é o seu espaço
                para gerenciar suas campanhas,<br /> acompanhar doações recebidas e dar<br /> ainda mais visibilidade às suas causas.<br />
                Por aqui você pode:<br /> Cadastrar e editar campanhas,<br /> acompanhar doações em tempo real e<br /> ampliar o alcance da sua missão.
            </p>
            <img src={cachorro} alt="Cachorro" id='cachorroImg' />
        </section>
    )
}