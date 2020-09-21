import React from "react";
//css
import "./styles.scss";

export default function InputSettings({
  type = "text",
  label,
  setValue,
  value,
  placeholder,
  disable,
}) {
  return (
    <aticle className="input-group-settings">
      <label htmlFor={type}>
        {label} <span>*</span>
      </label>
      <input
        disabled={disable}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </aticle>
  );
}
