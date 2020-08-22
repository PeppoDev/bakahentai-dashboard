import React from "react";
//css
import "./styles.scss";

export default function Radio({ value, name, text }) {
  return (
    <div className="radio-container">
      <input
        className="radio-button"
        type="radio"
        id={value}
        name={name}
        value={value}
        checked
      />
      <label className="radio-label" for={value}>
        {text}
      </label>
    </div>
  );
}
