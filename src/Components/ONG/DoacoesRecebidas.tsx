import dinheiro from "../../Images/assets/Ong/doacoesRecebidas/money-bag.png";
import roupas from "../../Images/assets/Ong/doacoesRecebidas/laundry.png";
import comida from "../../Images/assets/Ong/doacoesRecebidas/fast-food.png";
import '../../CSS/ONG/DoacoesRecebidas.css'

export default function Doacoes() {
    return (
        <section className='doacoesRecebidas'>
            <h1 className='doacoesRecebidasTitulo'>Minhas Doações Recebidas</h1>
            <div className='conteinerDoacoes'>
                <div className='cardDoacao'>
                    <img src={dinheiro} alt="Doação em dinheiro" className='icon' />
                    <p className='descricaoIcon'>Doação em dinheiro</p>
                    <button className='detalhes'>XXXXX</button>
                </div>
                <div className='cardDoacao'>
                    <img src={roupas} alt="Doação de roupas" className='icon' />
                    <p className='descricaoIcon'>Doação de roupas</p>
                    <button className='detalhes'>XXXXX</button>
                </div>
                <div className='cardDoacao'>
                    <img src={comida} alt="Doação de alimentos" className='icon' />
                    <p className='descricaoIcon'>Doação de alimentos</p>
                    <button className='detalhes'>XXXXX</button>
                </div>
                <div className='cardDoacao'>
                </div>
            </div>
        </section>
    )
}

