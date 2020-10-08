import React from "react";
import { Popover } from "@material-ui/core";
//css
import "./styles.scss";
//assets
import ditto from "../../assets/images/ditto.png";
import arrowIcon from "../../assets/icons/back.png";
import more from "../../assets/icons/more-alt.svg";
import star from "../../assets/icons/star.svg";

function LastRegistersRateItem() {
  const [show, setShow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPop = open ? "simple-popover" : undefined;

  return (
    <div className="last-rate-item">
      <span>
        <p>Nome do anime</p>
        <p>Ep.01</p>
      </span>
      <article>
        <img className="arrow" src={arrowIcon} alt="" />
        <img className="perfil" src={ditto} alt="" />
        <div>
          <span>
            <h2>Chris</h2>
            <img
              className="more-icon"
              src={more}
              alt=""
              onClick={handleClick}
            />
          </span>
          <div className="rate-container">
            <p>Avaliou em</p>
            <span className="star-group">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </span>
            <p>8</p>
          </div>
        </div>
      </article>

    
    </div>
  );
}
export default function LastFeedBacks() {
  return (
    <article className="last-feedbacks">
      <h1>últimos feedbacks</h1>

      <article className="last-feed-list">
        <LastRegistersRateItem />
        <LastRegistersRateItem />
        <LastRegistersRateItem />
        <LastRegistersRateItem />
        <LastRegistersRateItem />
        <LastRegistersRateItem />
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
