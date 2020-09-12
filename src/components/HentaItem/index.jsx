import React from "react";
import prev from "../../assets/images/prev2.png";
import * as ButtonHover from "../ButtonHover";
import "./styles.scss";
export default function HentaItem({ name, studios, img }) {
  return (
    <article className="hentai-item">
      <article className="image-container">
        <ButtonHover.Container>
          <ButtonHover.Button text="Editar" />
          <ButtonHover.Button text="Deletar" />
          <ButtonHover.Button text="Episódios" />
        </ButtonHover.Container>
      </article>
      <article className="info-group">
        <p>{name}</p>
        <p>{studios[0].name}</p>
      </article>
    </article>
  );
}
