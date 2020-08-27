import React from "react";
import "./styles.scss";
import upIcon from "../../assets/icons/upload.svg";

function DropZone(props) {
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const fileInputRef = React.useRef();

  React.useEffect(() => {
    if (selectedFiles.length !== 0) {
      props.setFiles((prev) => [...prev, ...selectedFiles]);
    }
  }, [selectedFiles]);

  const removeFile = (name) => {
    // find the index of the item
    // remove the item from array
    const selectedFileIndex = selectedFiles.findIndex((e) => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);
    // update selectedFiles array
    setSelectedFiles([...selectedFiles]);
    console.log(selectedFiles);
  };

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
    newFiles.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setSelectedFiles(selectedFiles.concat(reader.result));
      };    
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
        Solte ou clique aqui para upar uma imagem
      </div>
    </>
  );
}

export default DropZone;
