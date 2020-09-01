import React from "react";
//components
import TitlePage from "../../components/TitlePage";
import EpisodeItem from "../../components/EpisodeItem";
import plusIcon from "../../assets/icons/plus.svg";

//css
import "./styles.scss";
//assets
import playIcon from "../../assets/icons/play.svg";

function RegisterEpisodes() {
  return (
    <section className="page-container register-episodes">
      <TitlePage text="Cadastrar de Episódios" />
      <EpisodeItem text="Episódio 1" />
      <section>
        <div className="add-episode-item" onClick={() => null}>
          <img src={plusIcon} alt="" />
          <p>Adicionar Episódio</p>
        </div>
      </section>
    </section>
  );
}

export default RegisterEpisodes;
