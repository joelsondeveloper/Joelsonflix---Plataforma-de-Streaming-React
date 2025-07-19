import { Outlet, useNavigate } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


import Play from "./assets/play.png";

import { FaSearch } from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header_logo">
          <img src={Play} alt="Logo Joelsonflix" />
          <h1>Joelsonflix</h1>
        </div>
        <nav>
          <ul className="header_nav">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Filmes</a>
            </li>
            <li>
              <a href="#">Séries</a>
            </li>
            <li>
              <a href="#">Categorias</a>
            </li>
            <li>
              <a href="#">Minha Conta</a>
            </li>
          </ul>
        </nav>
        <div className="header_options">
          <FaSearch className="header_options_search_icon" />
          <input
            className="header_options_search"
            type="text"
            placeholder="Pesquisar filmes e séries..."
          />
          <button type="button" className="header_options_profile">
            j
          </button>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="footer_content_up">
          <div className="content_up1">
            <div className="content_up1_logo">
              <img src={Play} className="footer_logo" alt="Logo Joelsonflix" />
              <h3>Joelsonflix</h3>
            </div>
            <p>
              Sua plataforma de streaming favorita <br /> com os melhores filmes e
              séries.
            </p>
          </div>
          <div className="content_up2">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#">Sobre nos</a>
              </li>
              <li>
                <a href="#">Politica de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos de Uso</a>
              </li>
              <li>
                <a href="#">Suporte</a>
              </li>
            </ul>
          </div>
          <div className="content_up3">
            <h3>Categorias</h3>
            <ul>
              <li>
                <a href="#">Ação</a>
              </li>
              <li>
                <a href="#">Drama</a>
              </li>
              <li>
                <a href="#">Comédia</a>
              </li>
              <li>
                <a href="#">Ficção Científica</a>
              </li>
            </ul>
          </div>
          <div className="content_up4">
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <a href="#"><FaInstagram /></a>
              </li>
              <li>
                <a href="#"><FaTwitter /></a>
              </li>
              <li>
                <a href="#"><FaFacebookF /></a>
              </li>
              <li>
                <a href="#"><FaYoutube /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_content_down">
          <p>© 2025 Joelsonflix. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
