import React from "react";
//css
import "./styles.scss";
//assets
import ditto from "../../assets/images/ditto.png";
import arrowIcon from "../../assets/icons/back.png";

export default function LastFeedBacks() {
  return (
    <article className="last-feedbacks">
      <h1>últimos feedbacks</h1>

      <article className="last-feed-list">
        <div className="last-feed-item">
          <span>
            <p>Nome do anime</p>
            <p>Ep.01</p>
          </span>
          <article>
            <img className="arrow" src={arrowIcon} alt="" />
            <img className="perfil" src={ditto} alt="" />
            <div>
              <h2>Chris</h2>
              <p>Acabou de comentar</p>
            </div>
          </article>
        </div>{" "}
        <div className="last-feed-item">
          <span>
            <p>Nome do anime</p>
            <p>Ep.01</p>
          </span>
          <article>
            <img className="arrow" src={arrowIcon} alt="" />
            <img className="perfil" src={ditto} alt="" />
            <div>
              <h2>Chris</h2>
              <p>Acabou de comentar</p>
            </div>
          </article>
        </div>{" "}
        <div className="last-feed-item">
          <span>
            <p>Nome do anime</p>
            <p>Ep.01</p>
          </span>
          <article>
            <img className="arrow" src={arrowIcon} alt="" />
            <img className="perfil" src={ditto} alt="" />
            <div>
              <h2>Chris</h2>
              <p>Acabou de comentar</p>
            </div>
          </article>
        </div>{" "}
        <div className="last-feed-item">
          <span>
            <p>Nome do anime</p>
            <p>Ep.01</p>
          </span>
          <article>
            <img className="arrow" src={arrowIcon} alt="" />
            <img className="perfil" src={ditto} alt="" />
            <div>
              <h2>Chris</h2>
              <p>Acabou de comentar</p>
            </div>
          </article>
        </div>{" "}
        <div className="last-feed-item">
          <span>
            <p>Nome do anime</p>
            <p>Ep.01</p>
          </span>
          <article>
            <img className="arrow" src={arrowIcon} alt="" />
            <img className="perfil" src={ditto} alt="" />
            <div>
              <h2>Chris</h2>
              <p>Acabou de comentar</p>
            </div>
          </article>
        </div>{" "}
        <div className="last-feed-item">
          <span>
            <p>Nome do anime</p>
            <p>Ep.01</p>
          </span>
          <article>
            <img className="arrow" src={arrowIcon} alt="" />
            <img className="perfil" src={ditto} alt="" />
            <div>
              <h2>Chris</h2>
              <p>Acabou de comentar</p>
            </div>
          </article>
        </div>{" "}
        <div className="last-feed-item">
          <span>
            <p>Nome do anime</p>
            <p>Ep.01</p>
          </span>
          <article>
            <img className="arrow" src={arrowIcon} alt="" />
            <img className="perfil" src={ditto} alt="" />
            <div>
              <h2>Chris</h2>
              <p>Acabou de comentar</p>
            </div>
          </article>
        </div>
      </article>
    </article>
  );
}
