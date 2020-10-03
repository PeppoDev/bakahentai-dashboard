import React from "react";

//css
import "./styles.scss";

export default function RegisteredHentai() {
  return (
    <article className="registreds registred-hentai">
      {/* <article>
        <p>Ops. Você não Cadastrou Aqui</p>
      </article> */}

      <div className="imagem-container">
        <span className="hentai-item-name-container">
          <span>
            <h1>Nome do anime, eu acho </h1>
            <p> - Episode 1</p>
          </span>
          <p>Algum outro nome enos</p>
        </span>
      </div>
    </article>
  );
}
