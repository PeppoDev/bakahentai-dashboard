import React from "react";
//components
import { Link } from "react-router-dom";
//css
import "./styles.scss";
//assets
import penIcon from "../../assets/icons/pen.svg";
//react-redux
import { useSelector } from "react-redux";

export default function LastRegisters(props) {
  const page = useSelector((state) => state.page);

  const link = `All${page}`;
  return (
    <article className="last-registers">
      <h1>Últimos Cadastrados</h1>

      {page === "hentais" || page === "episodes" ? (
        <hr style={{ opacity: 1 }} />
      ) : (
        <hr style={{ opacity: 0 }} />
      )}
      {props.children}
      <Link to={link}>
        <button>Lista Completa</button>
      </Link>
    </article>
  );
}
