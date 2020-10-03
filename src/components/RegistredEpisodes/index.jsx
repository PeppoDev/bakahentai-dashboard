import React from "react";
import "./styles.scss";

export default function RegistredEpisodes() {
  return (
    <article className="registreds registred-episodes">
      <article>
        {/* <p className="empty">Ops. Você não Cadastrou Aqui</p> */}
        <div className="image-container">
          <span className="episode-item-name-container">
            <span>
              <h1>Nome do anime, eu acho </h1>
              <p> - Episode 1</p>
            </span>
            <p>Algum outro nome enos</p>
          </span>
        </div>
      </article>
      <article>
        {/* <p className="empty" > Ops. Você não Cadastrou Aqui</p> */}
        <div className="image-container">
          <span className="episode-item-name-container">
            <span>
              <h1>Nome do anime, eu acho </h1>
              <p> - Episode 1</p>
            </span>
            <p>Algum outro nome enos</p>
          </span>
        </div>
      </article>
    </article>
  );
}
