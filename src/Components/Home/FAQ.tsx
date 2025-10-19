import { useState } from "react";
import Crianca from '../../Images/assets/Home/FAQ/criança.webp';
import '../../CSS/Home/FAQ.css';

export default function FAQ() {
  // estado para guardar o índice do detalhe que está aberto
  const [detailsAberto, setdetailsAberto] = useState(null);

  // lista de perguntas e respostas (baseada no conteúdo estático fornecido)
  const faqs = [
    {
      pergunta: "Como funciona o processo de verificação das ONGs?",
      resposta: "As ONGs passam por uma verificação de CNPJ antes de serem exibidas na plataforma."
    },
    {
      pergunta: 'O que significa "ONG em destaque"?',
      resposta: "As ONGs que possuem maior participação de voluntários e maiores doações são consideradas destaques."
    },
    {
      pergunta: "Como posso me tornar um voluntário?",
      resposta: "É necessário o cadastro como Voluntário, na plataforma. Assim, será possível a participação como voluntário em campanhas e atividades de ONGs."
    },
    {
      pergunta: "Existe alguma documentação que comprove o Voluntariado?",
      resposta: "As ONGs fornecem certificados e documentos que comprovem a atividade concluída."
    }
];
  const fecharFAQ = (index) => {
    setdetailsAberto(detailsAberto === index ? null : index);
  };

  return (
    <section id="FAQ">
      <img src={Crianca} id="imagem-crianca" alt="Criança"/>
      <div id="PerguntasFQ"> {/* Renomeado de #Perguntas para #perguntas-frequentes */}
        <h3>Perguntas Frequentes</h3>
        {faqs.map((faq, index) => (
          <details key={index} open={detailsAberto === index} >
            <summary onClick={(e) => { e.preventDefault(); // Impede o evento normal do <summary> de alternar o <details>
                fecharFAQ(index); }}>
              {faq.pergunta}
            </summary>
            <p>{faq.resposta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
