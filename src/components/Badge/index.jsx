import React from "react";
//css
import "./styles.scss";

export default function Badge({ text, index, onClick = () => null }) {

  return (
    <span className="badge" onClick={() => onClick(index)}>
      <p>X</p>
      <p>{text}</p>
    </span>
  );
}
