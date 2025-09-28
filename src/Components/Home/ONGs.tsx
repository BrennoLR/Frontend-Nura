import ONG1 from '../../Images/imgONGs/ONG1.png'
import ONG2 from '../../Images/imgONGs/ONG2.png'
import ONG3 from '../../Images/imgONGs/ONG3.png'
import '../../CSS/Home/ONGs.css'

export default function ONGs(){
    return(
        <section id="ONGs">
            <article >
                <img src={ONG1} id="tamimg"/>
            </article>
            <article>
                <img src={ONG2} id="tamimg"/>
            </article>
            <article>
                <img src={ONG3} id="tamimg"/>
            </article>
        </section>
    )
}