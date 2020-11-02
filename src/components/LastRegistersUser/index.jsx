import React from "react";
//components
import { Popover } from "@material-ui/core";
import ModalPunish from "../ModalPunish";
//css
import "./styles.scss";
//assets
import photo from "../../assets/images/ditto.png";
import more from "../../assets/icons/more-alt.svg";

function LastRegistersUserItem() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openModal, setOpenModal] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPop = open ? "simple-popover" : undefined;
  return (
    <div className="registred-item">
      <div>
        <img src={photo} alt="" />
        <span>
          <a href="!#" target="_blank">
            <h2>Peppa Zensual</h2>
          </a>

          <p>Criou a conta há 3min</p>
        </span>
      </div>

      <img className="more-icon" src={more} alt="" onClick={handleClick} />
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
          <button onClick={() => setOpenModal(true)}>Punir</button>
        </span>
      </Popover>
      <ModalPunish
        open={openModal}
        setOpen={setOpenModal}
        onClick={() => setOpenModal(false)}
      />
    </div>
  );
}

export default function LastRegistersUser() {
  return (
    <article className="last-registers-user-list">
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
      <LastRegistersUserItem />
    </article>
  );
}
