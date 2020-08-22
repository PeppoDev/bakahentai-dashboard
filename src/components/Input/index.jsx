import React from "react";
//css
import "./styles.scss";

export default function Input({ placeholder, label, type = "text" }) {
  return (
    <article className="group-input">
      <input
        className="main-input"
        type={type}
        id={label}
        placeholder={placeholder}
        value={null}
        onChange={(event) => null}
      ></input>
      <label className="main-label" htmlFor="text">
        {label} <span>*</span>
      </label>
    </article>
  );
}
