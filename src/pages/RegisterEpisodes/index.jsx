import React from "react";
import { Link } from "react-router-dom";
//components
import TitlePage from "../../components/TitlePage";
import MainInput from "../../components/Input";
import DragNDrop from "../../components/DragNDrop";
//css
import "./styles.scss";
//assets
import playIcon from "../../assets/icons/play.svg";

function RegisterEpisodes() {
  return (
    <section className="page-container register-episodes">
      <TitlePage text="Cadastrar de Episódios" />
      <div className="episode-banner">
        <img src={playIcon} alt="" />
        <p>Episódio 1</p>
      </div>
      <article className="register-episodes-container">
        <article className="main-left">
          <MainInput
            className="input-episodes"
            label="Título do Hentai Selecionado"
            placeholder="Ex. Algum anime"
          />
          <MainInput
            className="input-episodes"
            label="Número de Episódios"
            placeholder="Ex. Algum anime"
          />
          <MainInput
            className="input-episodes"
            label="M3U8"
            placeholder="Ex. Algum anime"
          />
        </article>
        <article className="main-right">
          <DragNDrop />
        </article>
      </article>
    </section>
  );
}

export default RegisterEpisodes;
