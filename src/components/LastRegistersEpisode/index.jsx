import React from "react";
//css
import "./styles.scss";
//assets
import penIcon from "../../assets/icons/pen.svg";

export default function LastRegistersEpisode() {
  return (
    <article className="last-registers-list">
      <div className="registered-item">
        <span>
          <p>Nome do anime</p>
          <p>- Episode 1</p>
        </span>
        <img src={penIcon} alt="" />
      </div>
      <div className="registered-item">
        <p>Nome do anime - Episode 1</p>
        <img src={penIcon} alt="" />
      </div>
      <div className="registered-item">
        <p>Nome do anime - Episode 1</p>
        <img src={penIcon} alt="" />
      </div>
      <div className="registered-item">
        <p>Nome do anime - Episode 1</p>
        <img src={penIcon} alt="" />
      </div>
      <div className="registered-item">
        <p>Nome do anime - Episode 1</p>
        <img src={penIcon} alt="" />
      </div>
      <div className="registered-item">
        <p>Nome do anime - Episode 1</p>
        <img src={penIcon} alt="" />
      </div>
      <div className="registered-item">
        <p>Nome do anime - Episode 1</p>
        <img src={penIcon} alt="" />
      </div>
      <div className="registered-item">
        <p>Nome do anime - Episode 1</p>
        <img src={penIcon} alt="" />
      </div>
      <div className="registered-item">
        <p>Nome do anime - Episode 1</p>
        <img src={penIcon} alt="" />
      </div>
    </article>
  );
}
