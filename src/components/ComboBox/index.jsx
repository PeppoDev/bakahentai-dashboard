import React from "react";
//css
import "./styles.scss";

function ComboSelect(props) {
  return (
    <article>
      <select
        className="combo-select"
        name={props.htmlFor}
        id={props.htmlFor}
        mutiple={props.mutiple}
        onChange={
          props.mutiple
            ? (event) => props.onChange(event.target.value)
            : (event) => props.onChange(event.target.value)
        }
      >
        <option className="combo-item" value={null} defaultValue>
          Selecionar
        </option>

        {props.children}
      </select>
    </article>
  );
}

function ComboItem({ value, text }) {
  return (
    <>
      <option className="combo-item" value={value}>
        {text}
      </option>
    </>
  );
}

export { ComboItem, ComboSelect };
