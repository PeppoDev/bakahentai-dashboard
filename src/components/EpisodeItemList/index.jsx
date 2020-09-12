import React from "react";
//components
import * as ButtonHover from "../ButtonHover";
//css
import "./styles.scss";

function EpisodeItemList() {
  return (
    <article className="episode-item">
      <article className="image-container">
        <ButtonHover.Container>
          <ButtonHover.Button text="Editar" />
          <ButtonHover.Button text="Deletar" />
          <ButtonHover.Button text="Episódios" />
        </ButtonHover.Container>
      </article>
      <article className="info-group">
        <p>Nome do Anime - Episodio 1 </p>
        <p>Studio</p>
      </article>
    </article>
  );
}

export default EpisodeItemList;
