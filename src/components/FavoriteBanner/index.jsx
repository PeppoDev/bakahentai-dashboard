import React from "react";
//css
import "./style.scss";
//assets
import pen from "../../assets/icons/pen.svg";

function FavoriteBanner() {
  return (
    <article className="favorite-banner">
      <div className="main-left">
        <span />
        <p>
          Hentai favorito de <strong>Joaquim</strong>
        </p>
      </div>
      <div className="main-right">
        <img src={pen} alt="" />
        <p>Expira em 22 dias</p>
      </div>
    </article>
  );
}

export default FavoriteBanner;
