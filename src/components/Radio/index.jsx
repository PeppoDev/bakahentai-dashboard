import React from "react";
//css
import "./styles.scss";

function RadioForm(props) {
  return (
    <section className="radio-form">
      <p>
        {props.text}
        <span>*</span>:
      </p>
      {props.children}
    </section>
  );
}

function RadioInput({ value, name, text }) {
  return (
    <article className="radio-container">
      <input type="radio" id={value} name={name} value={value} />
      <label for={value}>{text}</label>
    </article>
  );
}

export { RadioInput, RadioForm };
