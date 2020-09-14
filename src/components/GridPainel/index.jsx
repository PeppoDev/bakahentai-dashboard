import React from "react";
//component
import Badge from "../Badge";
import MainInput from "../Input";
import { Modal, makeStyles, Backdrop } from "@material-ui/core";
//css
import "./styles.scss";

//style
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

function GridPainel({ data, title }) {
  const [showAll, setShowAll] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <article
      className="grid-painel"
      style={showAll ? { height: `${23 + (data.length / 7) * 3}rem` } : null}
    >
      <div className="title-painel">{title}</div>

      <div className="tags-painel">
        <div className={showAll ? "height-auto" : null}>
          {data.map((data, index) => (
            <Badge onClick={handleOpen} key={index} text={data.name} />
          ))}
        </div>
      </div>
      {data.length > 7 && showAll === false ? (
        <p onClick={() => setShowAll(true)} className="show-all">
          Mostrar Todos
        </p>
      ) : (
        <p onClick={() => setShowAll(false)} className="show-all">
          Mostrar Menos
        </p>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className="badge-modal">
          <h2>Editar Taxonomia</h2>
          <hr />
          <MainInput label="Título" />
          <span>
            <button onClick={handleClose}>Atualizar</button>
            <button onClick={handleClose}>Excluir</button>
          </span>
        </div>
      </Modal>
    </article>
  );
}

export default GridPainel;
