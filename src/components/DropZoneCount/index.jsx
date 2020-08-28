import React from "react";
import { Popover } from "@material-ui/core";
//css
import "./styles.scss";

export default function DropZoneCount({
  index,
  onClick,
  onDelete,
  onChange,
  className,
}) {
  const fileInputRef = React.useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
    onClick(index);
  }

  function handleDelete() {
    setAnchorEl(null);
    onDelete(index);
  }

  function handleClickInput() {
    fileInputRef.current.click();
    setAnchorEl(null);
  }

  function handleReplace() {
    if (fileInputRef.current.files.length) {
      if (fileInputRef.current.files[0].type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(fileInputRef.current.files[0]);
        reader.onload = function (e) {
          onChange(index, reader.result);
        };
      } else {
        console.log("Erro: formato não suportado");
      }
    }
  }
  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "chip-popover" : undefined;
  return (
    <>
      <input
        ref={fileInputRef}
        className="file-input"
        type="file"
        onChange={handleReplace}
      />
      <span
        className="chip-container"
        onMouseOver={() => null}
        onClick={() => onClick(index)}
        onDoubleClick={handleOpen}
      >
        {index + 1}
      </span>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <span className="chip-popover">
          <button onClick={handleClickInput}>Substituir</button>
          <button onClick={handleDelete}>Excluir</button>
        </span>
      </Popover>
    </>
  );
}
