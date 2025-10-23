import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { api } from "../../api/api";
import '../../CSS/Home/Campanhas.css'

interface Campanha {
  cam_nome: string;
  cam_desc: string;
  cam_img?: string;
}

export default function Campanhas() {
  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const itensPorPagina = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    buscarCampanhas();
  }, []);

  const buscarCampanhas = async () => {
    try {
      const res = await api.get<Campanha[]>("/camp");
      setCampanhas(res.data);
      setIndiceAtual(0);
    } catch (err) {
      console.error("Erro ao buscar campanhas:", err);
    }
  };

  const handleAnterior = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleProximo = () => {
    if (currentIndex + itemsPerPage < campanhas.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const campanhasVisiveis = campanhas.slice(indiceAtual, indiceAtual + itensPorPagina);

  return (
    <section id="secao-campanhas">
      <h1 id="titulo-secao-campanhas">Campanhas</h1>

      {campanhas.length === 0 ? (
        <p className="sem-campanha">Nenhuma campanha cadastrada.</p>
      ) : (
        <div id="container-campanhas">
          <IoIosArrowBack
            id="seta-esquerda-campanhas"
            onClick={handleAnterior}
            style={{
              cursor: indiceAtual === 0 ? "default" : "pointer",
              opacity: indiceAtual === 0 ? 0.3 : 1,
            }}
          />

          {campanhasVisiveis.map((c) => (
            <div id="cartao-campanha">
              {c.cam_img && (
                <img id="imagem-campanha" src={c.cam_img} alt={c.cam_nome} />
              )}
              <h2 id="titulo-campanha">{c.cam_nome}</h2>
              <p id="descricao-campanha">{c.cam_desc}</p>
            </div>
          ))}

          <IoIosArrowForward
            id="seta-direita-campanhas"
            onClick={handleProximo}
            style={{
              cursor:
                indiceAtual + itensPorPagina >= campanhas.length
                  ? "default"
                  : "pointer",
              opacity:
                indiceAtual + itensPorPagina >= campanhas.length ? 0.3 : 1,
            }}
          />
        </div>
      )}
    </section>
  );
}
