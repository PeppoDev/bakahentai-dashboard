import React from "react";
//css
import "./styles.scss";
//assets
import plusIcon from "../../assets/icons/plus.svg";
//components
import QuickAcess from "../../components/QuickAcess";

function Header() {
  return (
    <header className="header-container">
      <p className="datenow">dia 18 de agosto de 2020</p>
      <hr />

      <div className="welcome-banner">
        <span className="banner-text">
          <h2>Bem vindo de volta senpai!</h2>
          <p>Gostaria de adicionar algo novo hoje?</p>
        </span>
        <span className="group-button">
          <button>
            <img src={plusIcon} alt="" />
            Novo hentai
          </button>
          <button>
            <img src={plusIcon} alt="" />
            Novo Episódio
          </button>
        </span>
      </div>
      <QuickAcess />
    </header>
  );
}

export default Header;
