import React from "react";
//components
import { Popover } from "@material-ui/core";
//css
import "./styles.scss";
//assets
import ditto from "../../assets/images/ditto.png";
import arrowIcon from "../../assets/icons/back.png";
import more from "../../assets/icons/more-alt.svg";

function LastRegistersCommentsItem() {
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
    <div className="last-feed-item">
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
          <p>
            Se você pensa que pensado em mim, eu sinto o seu pensar, saiba que
            seu pensamento passa por mim sem cessar.
          </p>
        </div>
      </article>

      <Popover
        id={idPop}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        style={{ width: "15rem" }}
      >
        <span className="popover status">
          <button>Editar</button>
          <button>Punir</button>
        </span>
      </Popover>
    </div>
  );
}

export default function RegistredComments() {
  return (
    <article className="registred-comments">
      {/* <article>
        <p>Você ainda não comentou algo</p>
      </article> */}
      <article className="last-comments-list">
        <LastRegistersCommentsItem />
        <LastRegistersCommentsItem />
        <LastRegistersCommentsItem />
        <LastRegistersCommentsItem />
        <LastRegistersCommentsItem />
        <LastRegistersCommentsItem />
        <LastRegistersCommentsItem />
        <LastRegistersCommentsItem />
      </article>
      <button>Lista Completa</button>
    </article>
  );
}
