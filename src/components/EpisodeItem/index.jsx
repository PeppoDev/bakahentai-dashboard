import React from "react";
//components
import DropZone from "../DropZone";
import MainInput from "../Input";
import InputVideo from "../InputVideo";
//css
import "./styles.scss";
//assets
import playIcon from "../../assets/icons/play.svg";

export default function EpisodeItem({ id, name }) {
  const [showItens, setShowItens] = React.useState(true);


  //TODO:resovlver a bagaça do MainInput disable
  return (
    <article className="register-episodes-container">
      <div
        className={`episode-banner ${
          showItens ? "animation-img" : "animation-img-close"
        }`}
        onClick={() => setShowItens(showItens ? false : true)}
      >
        <img src={playIcon} alt="" />
        <p>{`Episódio ${id}`}</p>
      </div>

      {showItens ? (
        <article>
          <article className="grid-episode-item">
            <article className="main-left">
              <MainInput
                valueName={name}
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
              <DropZone text="Clique ou arraste uma imagem de até 1280x720" />
            </article>
          </article>
          <InputVideo />
        </article>
      ) : null}
    </article>
  );
}
