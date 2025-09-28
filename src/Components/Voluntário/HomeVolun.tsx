import logo from "../../Images/assets/logo.png";
import sino from "../../Images/assets/sinos.png";
import usuario from "../../Images/assets/do-utilizador.png";
import criancas from "../../Images/assets/crianças.jpg";
import cafe from "../../Images/assets/cafécomsorrisos.jpg";
import alimento from "../../Images/assets/alimento.jpg";
import cao from "../../Images/assets/cão.jpg";
import coracao from "../../Images/assets/core.jpg";
import tt from "../../Images/assets/tt.svg";
import instagram from "../../Images/assets/instagram (3).png";
import youtube from "../../Images/assets/youtube (1).png";
import '../../CSS/Voluntário/geralVolun.css'

export default function PaginaVoluntario() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <picture>
            <img src={logo} alt="Logo Nura" />
          </picture>
        </div>
        <div className="nav-icons">
          <img src={sino} alt="Notificações" className="icon" />
          <img src={usuario} alt="Usuário" className="icon" />
        </div>
      </nav>

      <main>
        {/* Sessão inicial */}
        <section className="sessao-inicial">
          <div className="texto-voluntario">
            <h2>Dados do Voluntário</h2>
            <p>
              Olá [Nome do Voluntário]! Este é o seu espaço exclusivo para
              gerenciar tudo sobre a sua ONG.
              <br />
              Por aqui, você pode:
              <br />
              Verificar as doações recebidas,
              <br />
              Conhecer novos voluntários e
              <br />
              Consultar e adicionar campanhas.
            </p>
          </div>
          <div className="imagem-voluntario">
            <picture>
              <img src={criancas} alt="Foto de perfil" />
            </picture>
            <a href="#" className="trocar-foto">
              Mudar foto de perfil
            </a>
          </div>
        </section>

        {/* ONGs convocando */}
        <section className="sessao-ongs">
          <h2>ONGs Convocando</h2>
          <div className="lista-ongs">
            <div className="ong">
              <div className="container"></div>
              <p>ONG Viver</p>
            </div>
            <div className="ong">
              <div className="container"></div>
              <p>ONG AVA</p>
            </div>
            <div className="ong">
              <div className="container"></div>
              <p>ONG Tamar</p>
            </div>
          </div>
        </section>

        {/* Consultar campanhas */}
        <section className="sessao-consulta">
          <h2>Consultar campanhas participando</h2>
          <div className="cards-consulta">
            <div className="card">
              <picture>
                <img src={cafe} alt="Café com Sorrisos" />
              </picture>
              <h3>Café com Sorrisos</h3>
              <p>Participe da campanha café com sorrisos!</p>
              <div className="info">
                <span>📅 26/08/2025</span>
                <span>☕ Café com Sorrisos</span>
              </div>
            </div>

            <div className="card cadastrar">
              <picture>
                <img src={alimento} alt="Cadastrar nova campanha" />
              </picture>
              <p>Clique no “+” para cadastrar uma nova campanha.</p>
            </div>

            <div className="card">
              <picture>
                <img src={cao} alt="Feira de Adoção" />
              </picture>
              <h3>Feira de Adoção</h3>
              <p>Participe da campanha café com sorrisos!</p>
              <div className="info">
                <span>📅 22/08/2025</span>
                <span>🐶 Espaço Família e Animal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gráfico */}
        <section className="sessao-grafico">
          <h2>Total de horas contribuindo</h2>
          <div className="conteudo-grafico">
            <button className="seta-grafico">&#10094;</button>
            <div className="grafico-placeholder"></div>
            <button className="seta-grafico">&#10095;</button>
          </div>
        </section>

        {/* Certificados */}
        <section className="sessao-certificados">
          <div className="texto">
            <h2>Certificados e Documentos</h2>
            <p>
              Aqui é o local onde
              <br />
              encontrará os selos,
              <br />
              certificados de participação:
            </p>
            <button>Visualizar</button>
          </div>
          <div className="imagem-coracao">
            <picture>
              <img
                src={coracao}
                alt="Pessoa segurando um coração vermelho"
              />
            </picture>
          </div>
        </section>
      </main>
      <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Como ajudar</h3>
          <ul>
            <li>Doações</li>
            <li>Quero criar uma ONG</li>
            <li>Seja voluntário</li>
            <li>Quero ser um patrocinador</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quem somos?</h3>
          <ul>
            <li>Equipe</li>
            <li>Patrocinadores</li>
            <li>Missão</li>
          </ul>
        </div>

        <div className="footer-column logo-column">
          <div className="logo">
            <img src={logo} alt="Logo Nura" />
          </div>
          <div className="contact">
            <p>Contato:</p>
            <p>nura@gmail.com</p>
            <p>(xx) xxxx-xxxx</p>
          </div>
          <div className="social-icons">
            <img src={tt} alt="X" />
            <img src={instagram} alt="Instagram" />
            <img src={youtube} alt="YouTube" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Nura © 2025 | Todos os direitos reservados.</p>
      </div>
    </footer>
    </div>
    
  );
}