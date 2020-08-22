import React from "react";
//css
import "./styles.scss";
export default function TextArea({ text }) {
  return (
    <article className="text-area-group">
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <label>
        {text} <span>*</span>{" "}
      </label>
    </article>
  );
}
