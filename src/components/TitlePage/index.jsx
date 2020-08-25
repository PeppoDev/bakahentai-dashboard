import React from "react";
import { Link } from "react-router-dom";
//css
import "./styles.scss";
//assets
import backIcon from "../../assets/icons/back.png";

export default function TitlePage({ text }) {
  return (
    <>
      <p className="page-title">
        <Link to="/">
          <img className="backicon" src={backIcon} alt="" />
        </Link>
        {text}
      </p>
      <hr />
    </>
  );
}
