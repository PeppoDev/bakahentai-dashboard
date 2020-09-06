import React from "react";
import prev from "../../assets/images/prev2.png";
import "./styles.scss";
export default function HentaItem() {
  const divStyle = {
    backgroundImage: "url(" + prev + ")",
  };

  return (
    <article className="hentai-item">
      <article className="image-container">
        <div className="button-group">
          <button onClick={() => null}>Editar</button>
          <button onClick={() => null}>Deletar</button>
          <button onClick={() => null}>Episódios</button>
        </div>
      </article>
      <article className="info-group">
        <p>Nome do Anime </p>
        <p>Studio</p>
      </article>
    </article>
  );
}
