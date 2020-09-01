import React from "react";
//components
import DropZone from "../DropZone";
import MainInput from "../Input";

//css
import "./styles.scss";
//assets
import playIcon from "../../assets/icons/play.svg";

export default function EpisodeItem({ text }) {
  const [showItens, setShowItens] = React.useState(true);

  return (
    <article className="register-episodes-container">
      <div
        className={`episode-banner ${
          showItens ? "animation-img" : "animation-img-close"
        }`}
        onClick={() => setShowItens(showItens ? false : true)}
      >
        <img src={playIcon} alt="" />
        <p>{text}</p>
      </div>

      {showItens ? (
        <article>
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
            <DropZone />
          </article>
        </article>
      ) : null}
    </article>
  );
}
