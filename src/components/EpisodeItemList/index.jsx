import React from "react";
//css
import "./styles.scss";

function EpisodeItemList() {
  return (
    <article className="episode-item">
      <article className="image-container">
        <div className="button-group">
          <button onClick={() => null}>Editar</button>
          <button onClick={() => null}>Deletar</button>
          <button onClick={() => null}>Episódios</button>
        </div>
      </article>
      <article className="info-group">
        <p>Nome do Anime - Episodio 1 </p>
        <p>Studio</p>
      </article>
    </article>
  );
}

export default EpisodeItemList;
