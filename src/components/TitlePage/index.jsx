import React from "react";
import { Link } from "react-router-dom";
//css
import "./styles.scss";
//assets
import backIcon from "../../assets/icons/back.png";

export default function TitlePage(props) {
  const { text } = props;
  return (
    <section className="page-title">
      <article className="page-title-article">
        <p>
          <Link to="/">
            <img className="backicon" src={backIcon} alt="" />
          </Link>
          {text}
        </p>
        <div className="select-container">{props.children}</div>
      </article>

      <hr />
    </section>
  );
}
