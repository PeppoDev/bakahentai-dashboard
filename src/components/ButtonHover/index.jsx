import React from "react";
//css
import "./styles.scss";

export function Container(props) {
  return <ul className="button-group">{props.children}</ul>;
}

export function Button({ text, onClick = () => null }) {
  return (
    <li>
      <button onClick={onClick}>{text}</button>
    </li>
  );
}
