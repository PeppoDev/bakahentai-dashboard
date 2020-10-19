import React from "react";
import prev from "../../assets/images/prev2.png";
import * as ButtonHover from "../ButtonHover";
import "./styles.scss";
//assets
import EditIcon from "../../assets/icons/penw.svg";
import StarIcon from "../../assets/icons/star.svg";

import TrashIcon from "../../assets/icons/trashw.svg";

export default function FapListItem({ name, studios, img }) {
  return (
    <article className="hentai-item">
      <article className="image-container">
        <ButtonHover.Container>
          <ButtonHover.Button text="Favoritar" img={StarIcon} />
          <ButtonHover.Button text="Remover" img={TrashIcon} />
        </ButtonHover.Container>
      </article>
      <article className="info-group">
        <p>{name}</p>
        <p>{studios[0].name}</p>
      </article>
    </article>
  );
}
