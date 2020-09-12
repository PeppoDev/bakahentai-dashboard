import React from "react";
import "./styles.scss";
import upIcon from "../../assets/icons/upload.svg";

function DropZone(props) {
  const fileInputRef = React.useRef();

  const { setFiles, setBase64, limit = 100 } = props;

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  const fileDrop = async (e) => {
    e.preventDefault();

    const files = await e.dataTransfer.files;

    if (files.length) {
      handleFiles(files);
    } else {
    }
  };

  const handleFiles = (files) => {
    const newFiles = Object.values(files);
    let count = props.files.length;

    newFiles.map((file) => {
      if (file.type.includes("image") && count < limit) {
        count = count + 1;
        setFiles((prev) => [...prev, file]);
      } else {
        console.log("Erro: formato não suportado");
      }
      return null;
    });
  };

  return (
    <>
      <div
        className="dragndrop"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        onClick={fileInputClicked}
      >
        <input
          multiple
          ref={fileInputRef}
          className="file-input"
          type="file"
          onChange={filesSelected}
        />
        <img src={upIcon} alt="" />
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default DropZone;
