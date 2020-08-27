import React from "react";
//css
import "./styles.scss";
//assets
import removeIcon from "../../assets/icons/remove.png";

export default function Badge({ text }) {
  return (
    <span className="badge">
      <p>{text}</p> <img src={removeIcon} alt="" />
    </span>
  );
}
