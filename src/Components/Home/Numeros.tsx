import casa from '../../Images/assets/Home/Numeros/casa.png';
import coracao from '../../Images/assets/Home/Numeros/coracao.png';
import gostos from '../../Images/assets/Home/Numeros/gostos.png';
import megafone from '../../Images/assets/Home/Numeros/megafone.png';
import pessoas from '../../Images/assets/Home/Numeros/pessoas-juntas.png';
import dadosnum from '../plugins/dados.json';
import '../../CSS/Home/numeros.css';

export default function Numeros() {
    const imagens = [casa, coracao, gostos, megafone, pessoas];

    return (
        <section id="numeros">
            {dadosnum.map((item, index) => (
                <article key={index}>
                    <img src={imagens[index]} id="ajtam" alt={item.titulo} />
                    <h3 id="fontetam">{item.titulo}</h3>
                    <button id="buttontam">{item.valor}</button>
                </article>
            ))}
        </section>
    );
}