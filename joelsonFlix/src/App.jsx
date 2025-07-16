import { Outlet } from "react-router-dom";

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
    </div>
  );
}

export default App;
