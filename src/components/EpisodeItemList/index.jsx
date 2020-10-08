import React from "react";
//components
import * as ButtonHover from "../ButtonHover";
//css
import "./styles.scss";
//assets
import EditIcon from "../../assets/icons/penw.svg";
import TrashIcon from "../../assets/icons/trashw.svg";

function EpisodeItemList() {
  return (
    <article className="episode-item">
      <article className="image-container">
        <ButtonHover.Container>
          <ButtonHover.Button text="Editar" img={EditIcon} />
          <ButtonHover.Button text="Deletar" img={TrashIcon} />
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
