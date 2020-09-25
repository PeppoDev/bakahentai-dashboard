import React from "react";
//css
import "./styles.scss";
//assets
import penIcon from "../../assets/icons/pen.svg";

export default function LastRegisters() {
  return (
    <article className="last-registers">
      <h1>Últimos Cadastrados</h1>
      <hr />
      <article className="last-registers-list">
        <div className="registered-item">
          <p>Nome do anime</p>
          <img src={penIcon} alt="" />
        </div>
        <div className="registered-item">
          <p>Nome do anime</p>
          <img src={penIcon} alt="" />
        </div>{" "}
        <div className="registered-item">
          <p>Nome do anime</p>
          <img src={penIcon} alt="" />
        </div>{" "}
        <div className="registered-item">
          <p>Nome do anime</p>
          <img src={penIcon} alt="" />
        </div>{" "}
        <div className="registered-item">
          <p>Nome do anime</p>
          <img src={penIcon} alt="" />
        </div>{" "}
        <div className="registered-item">
          <p>Nome do anime</p>
          <img src={penIcon} alt="" />
        </div>{" "}
        <div className="registered-item">
          <p>Nome do anime</p>
          <img src={penIcon} alt="" />
        </div>{" "}
        <div className="registered-item">
          <p>Nome do anime</p>
          <img src={penIcon} alt="" />
        </div>{" "}
        <div className="registered-item">
          <p>Nome do anime</p>
          <img src={penIcon} alt="" />
        </div>{" "}
      </article>
      <button>Lista Completa</button>
    </article>
  );
}
