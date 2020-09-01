import React from "react";
//css
import "./styles.scss";

export default function InputVideo({ onChange }) {
  const fileInputRef = React.useRef();
  const [selectedFile, setSelectedFile] = React.useState("");
  const [fileInfo, setFileInfo] = React.useState("");

  function handleRemove() {
    setSelectedFile("");
    setFileInfo("");
  }
  function handleClick() {
    fileInputRef.current.click();
  }

  function filesSelected() {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  }
  async function handleFiles(file) {
    const newFile = Object.values(file);
    if (newFile[0].type.includes("mp4")) {
      setFileInfo(newFile[0].name);
      const reader = new FileReader();
      reader.readAsDataURL(newFile[0]);
      reader.onload = function (e) {
        setSelectedFile(reader.result);
      };
    } else {
      console.log("Erro: formato não suportado");
    }
  }

  return (
    <section className="input-video-container">
      <input
        ref={fileInputRef}
        className="file-input"
        type="file"
        onChange={filesSelected}
      />
      <hr />

      {fileInfo !== "" ? (
        <p onClick={() => handleRemove()} className="name-file">
          <span>X</span> {fileInfo}
        </p>
      ) : (
        <p>Nenhum arquivo selecionado</p>
      )}

      <button disabled={fileInfo ? true : false} onClick={() => handleClick()}>
        Selecionar arquivo .mp4
      </button>
    </section>
  );
}
