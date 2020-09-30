import React from "react";
//css
import "./styles.scss";
//assets
import penIcon from "../../assets/icons/pen.svg";

export default function LastRegisters(props) {
  return (
    <article className="last-registers">
      <h1>Últimos Cadastrados</h1>
      <hr />
      {props.children}
      <button>Lista Completa</button>
    </article>
  );
}
