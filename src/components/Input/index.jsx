import React from "react";
//css
import "./styles.scss";

export default function Input({
  placeholder,
  label,
  type = "text",
  className,
  value,
  onChange,
  valueName,
  onKeyPress = () => null,
}) {
  const style = className + " group-input";

  return (
    <article className={style}>
      <input
        type={type}
        id={label}
        disabled={valueName ? true : false}
        placeholder={placeholder}
        value={valueName ? valueName : value}
        onChange={(event) => onChange(event.target.value)}
        onKeyPress={(event) => onKeyPress(event)}
      ></input>
      <label htmlFor="text">
        {label} <span>*</span>
      </label>
    </article>
  );
}
