import React from "react";
//css
import "./styles.scss";
//assets
import penIcon from "../../assets/icons/pen.svg";
//react-redux
import { useSelector } from "react-redux";

export default function LastRegisters(props) {
  const page = useSelector((state) => state.page);
  return (
    <article className="last-registers">
      <h1>Últimos Cadastrados</h1>

      {page === "hentais" || page === "episodes" ? (
        <hr style={{ opacity: 1 }} />
      ) : (
        <hr style={{ opacity: 0 }} />
      )}
      {props.children}
      <button>Lista Completa</button>
    </article>
  );
}
