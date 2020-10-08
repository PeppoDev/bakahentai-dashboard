import React from "react";
import prev from "../../assets/images/prev2.png";
import * as ButtonHover from "../ButtonHover";
import "./styles.scss";
//assets
import EditIcon from "../../assets/icons/penw.svg";
import TrashIcon from "../../assets/icons/trashw.svg";
import EpisodeIcon from "../../assets/icons/plus.svg";

export default function FapListItem({ name, studios, img }) {
  return (
    <article className="hentai-item">
      <article className="image-container">
        <ButtonHover.Container>
          <ButtonHover.Button text="Editar" img={EditIcon} />
          <ButtonHover.Button text="Deletar" img={TrashIcon} />
          <ButtonHover.Button text="Episódios" img={EpisodeIcon} />
        </ButtonHover.Container>
      </article>
      <article className="info-group">
        <p>{name}</p>
        <p>{studios[0].name}</p>
      </article>
    </article>
  );
}
