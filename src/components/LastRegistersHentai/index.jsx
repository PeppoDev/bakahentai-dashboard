import React from "react";
//components
import { Popover } from "@material-ui/core";

//css
import "./styles.scss";
//assets
import penIcon from "../../assets/icons/pen.svg";

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
    <div className="registered-item">
      <span>
        <p>Nome do anime</p>
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
          <button>Editar</button>
          <button>Punir</button>
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
