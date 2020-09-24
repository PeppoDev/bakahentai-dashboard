import React from "react";
//css
import "./styles.scss";

export default function ShowMore({ setValue }) {
  return (
    <button className="showmore-button" onClick={setValue}>
      Mostrar Mais
    </button>
  );
}
