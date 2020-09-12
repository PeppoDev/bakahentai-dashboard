import React from "react";
//css
import "./styles.scss";

export function Container(props) {
  return <div className="button-group">{props.children}</div>;
}

export function Button({ text, onClick = () => null }) {
  return <button onClick={onClick}>{text}</button>;
}
