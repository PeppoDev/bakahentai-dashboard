import React from "react";
//css
import "./styles.scss";

export default function Radio({ value, name, text }) {
  return (
    <section className="radio-container">
      <input type="radio" id={value} name={name} value={value} />
      <label for={value}>{text}</label>
    </section>
  );
}
