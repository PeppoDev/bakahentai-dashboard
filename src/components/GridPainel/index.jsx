import React from "react";
//component
import Badge from "../Badge";
import MainInput from "../Input";
import { Modal, makeStyles, Backdrop } from "@material-ui/core";
//assets
import closeIcon from "../../assets/icons/close.svg";
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
  const [open, setOpen] = React.useState(false);
  const [showAll, setShowAll] = React.useState(false);

  const [tagsPerPage, setTagsPerPage] = React.useState(-2);

  const [input, setInput] = React.useState("");
  const [, setSelectedBadge] = React.useState("");

  const classes = useStyles();

  function handleShowAll() {
    setShowAll(true);
  }
  function handleShowLess() {
    setShowAll(false);
  }

  function handleClick(key) {
    setInput(data[key].name);
    handleOpen();
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const currentTags = data.slice(0, tagsPerPage);
  return (
    <article
      className="grid-painel"
      style={
        showAll
          ? { height: `${23 + (data.length / 7) * 3}rem` }
          : { height: "23rem" }
      }
    >
      <div className="title-painel">{title}</div>

      <div
        className="tags-painel"
        style={
          showAll
            ? {
                overflow: "visible",
                height: `${7 + (data.length / 7) * 3}rem`,
              }
            : { height: "7rem" }
        }
      >
        <div>
          {currentTags.map((data, index) => (
            <Badge
              onClick={handleClick}
              key={index}
              index={index}
              text={data.name}
            />
          ))}
        </div>
      </div>
      {data.length > 7 ? (
        !showAll ? (
          <p onClick={handleShowAll} className="show-all">
            Mostrar Todos
          </p>
        ) : (
          <p onClick={handleShowLess} className="show-all">
            Mostrar Menos
          </p>
        )
      ) : null}

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
        <div className="badge-modal">
          <div>
            <h2>Editar Taxonomia</h2>
            <img onClick={handleClose} src={closeIcon} alt="" />
          </div>

          <hr />
          <MainInput label="Título" onChange={setInput} value={input} />
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
