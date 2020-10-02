import React from "react";
//css
import "./styles.scss";
//assets
import ditto from "../../assets/images/ditto.png";
import arrowIcon from "../../assets/icons/back.png";

export default function RegistredComments() {
  return (
    <article className="registred-comments">
      {/* <article>
        <p>Você ainda não comentou algo</p>
      </article> */}
      <article className="last-comments-list">
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
              <p>
                Se você pensa que pensado em mim, eu sinto o seu pensar, saiba
                que seu pensamento passa por mim sem cessar.
              </p>
            </div>
          </article>
        </div>
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
              <p>
                Se você pensa que pensado em mim, eu sinto o seu pensar, saiba
                que seu pensamento passa por mim sem cessar.
              </p>
            </div>
          </article>
        </div>
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
              <p>
                Se você pensa que pensado em mim, eu sinto o seu pensar, saiba
                que seu pensamento passa por mim sem cessar.
              </p>
            </div>
          </article>
        </div>
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
              <p>
                Se você pensa que pensado em mim, eu sinto o seu pensar, saiba
                que seu pensamento passa por mim sem cessar.
              </p>
            </div>
          </article>
        </div>
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
              <p>
                Se você pensa que pensado em mim, eu sinto o seu pensar, saiba
                que seu pensamento passa por mim sem cessar.
              </p>
            </div>
          </article>
        </div>
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
              <p>
                Se você pensa que pensado em mim, eu sinto o seu pensar, saiba
                que seu pensamento passa por mim sem cessar.
              </p>
            </div>
          </article>
        </div>
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
              <p>
                Se você pensa que pensado em mim, eu sinto o seu pensar, saiba
                que seu pensamento passa por mim sem cessar.
              </p>
            </div>
          </article>
        </div>
      </article>
      <button>Lista Completa</button>
    </article>
  );
}
