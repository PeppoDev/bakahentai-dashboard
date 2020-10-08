import React from "react";
//components
import { Popover } from "@material-ui/core";

//css
import "./styles.scss";
//assets
import penIcon from "../../assets/icons/penw.svg";

function LastRegistersEpisodeItem() {
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
    <div className="registered-item last-registred-hentai">
      <span>
        <a href="!#" target="_blank">
          <p>Nome do anime</p>
        </a>
      </span>
      <img src={penIcon} onClick={handleClick} alt="" />
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
          <button>Visualizar</button>
          <button>Editar</button>
          <button>Deletar</button>
        </span>
      </Popover>
    </div>
  );
}

export default function LastRegistersHentai() {
  return (
    <article className="last-registers-list">
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
      <LastRegistersEpisodeItem />
    </article>
  );
}
