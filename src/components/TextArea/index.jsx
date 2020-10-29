import React from "react";
//css
import "./styles.scss";
export default function TextArea({ text, value, disablePlaceHolder = false }) {
  return (
    <article className="text-area-group">
      <textarea value={value} name="" id="" cols="30" rows="10"></textarea>
      {!disablePlaceHolder && (
        <label>
          {text} <span>*</span>{" "}
        </label>
      )}
    </article>
  );
}
