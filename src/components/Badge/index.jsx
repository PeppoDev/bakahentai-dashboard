import React from "react";
//css
import "./styles.scss";

export default function Badge({ text, index, onClick = () => null }) {
  return (
    <span className="badge">
      <p onClick={() => onClick(index)}>X</p>
      <p>{text}</p>
    </span>
  );
}
