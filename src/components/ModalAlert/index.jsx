import React from "react";
//components
import { makeStyles, Modal, Backdrop } from "@material-ui/core";
//assets
import closeIcon from "../../assets/icons/close.svg";
//css
import "./styles.scss";
//styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalSucess({ open, setOpen, onClick }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className="badge-alert-modal">
        <img onClick={handleClose} src={closeIcon} alt="" />
        <h2>Você tem certeza?</h2>

        <p>Essa opção não é reversível</p>
        <span>
          <button onClick={handleClose}>Cancelar</button>
          <button onClick={onClick}>OK</button>
        </span>
      </div>
    </Modal>
  );
}
