import React from "react";
//css
import "./styles.scss";
//assets

export function Container(props) {
  return <ul className="button-group">{props.children}</ul>;
}

export function Button({ text, onClick = () => null, img }) {
  return (
    <li>
      <span className="button-hover">
        <img src={img} alt="" />
        <button onClick={onClick}>{text}</button>
      </span>
    </li>
  );
}
