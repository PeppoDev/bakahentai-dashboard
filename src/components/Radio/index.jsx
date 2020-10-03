import React from "react";
import "./styles.scss";

function RadioForm(props) {
  return (
    <section
      className={`radio-form ${props.className}`}
      onChange={(event) => props.onChange(event.target.value)}
    >
      <p>
        {props.text}
        <span>*</span>:
      </p>
      {props.children}
    </section>
  );
}

function RadioInput({ value, name, text, refInput }) {
  return (
    <article className="radio-container">
      <input type="radio" id={value} name={name} value={value} ref={refInput} />
      <label htmlFor={value}>{text}</label>
    </article>
  );
}

export { RadioInput, RadioForm };
