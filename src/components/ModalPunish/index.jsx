import React from "react";
//components
import { makeStyles, Modal, Backdrop } from "@material-ui/core";
import * as Radio from "../../components/Radio";
import TextArea from "../../components/TextArea";
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

export default function ModalPunish({ open, setOpen, onClick }) {
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
      <div className="badge-punish-modal">
        {/* <img onClick={handleClose} src={closeIcon} alt="" /> */}
        <p>
          Estabelecer punição para <span>Peppa</span>
        </p>
        <hr />
        <Radio.RadioForm disablePlaceHolder={true}>
          <Radio.RadioInput
            value="Suspender conta por 24 horas"
            text="Suspender conta por 24 horas"
          />
          <Radio.RadioInput
            value="Suspender conta permanentemente"
            text="Suspender conta permanentemente"
          />
          <Radio.RadioInput
            value="Alertar usuário por conduta inapropriada"
            text="Alertar usuário por conduta inapropriada"
          />
          <Radio.RadioInput
            value="Suspender conta por 24 horas"
            text="Suspender conta por 24 horas"
          />
          <Radio.RadioInput
            value="Resetar lista de fap e favoritos"
            text="Resetar lista de fap e favoritos"
          />
        </Radio.RadioForm>
        <p>Menssagem</p>

        <TextArea disablePlaceHolder={true} />
        <button className="send-punish" onClick={handleClose}>
          Enviar punição
        </button>
      </div>
    </Modal>
  );
}
