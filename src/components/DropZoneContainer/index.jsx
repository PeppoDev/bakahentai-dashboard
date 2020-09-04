import React from "react";
import DropZone from "../DropZone";
import Button from "../../components/MenuButton";
import DropZoneCount from "../DropZoneCount";
//css
import "./styles.scss";

function DropZoneContainer() {
  const [files, setFiles] = React.useState([]);
  const [selectedChip, setSelectedChip] = React.useState(-1);

  const [starred, setStarred] = React.useState(-1);

  const divStyle =
    selectedChip !== -1
      ? {
          backgroundImage: "url(" + files[selectedChip] + ")",
        }
      : null;

  const fileInputRef = React.useRef();

  function handleClickInput() {
    fileInputRef.current.click();
  }

  function handleDelete() {
    const newFiles = Array.from(files);
    newFiles.splice(selectedChip, 1);
    setFiles(newFiles);
    setSelectedChip(-1);
  }

  function handleReplace(file) {
    let newFiles = Array.from(files);
    newFiles[selectedChip] = file;
    setFiles(newFiles);
  }

  function handleFile() {
    if (fileInputRef.current.files.length) {
      if (fileInputRef.current.files[0].type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(fileInputRef.current.files[0]);
        reader.onload = function (e) {
          handleReplace(reader.result);
        };
      } else {
        console.log("Erro: formato não suportado");
      }
    }
  }
  function handleStarred() {
    setStarred(selectedChip);
  }

  function handleUnStarred() {
    setStarred(-1);
  }

  return (
    <section className="dragndrop-container">
      <article className="dragndrop-main-container">
        {selectedChip === -1 ? (
          <DropZone text="Clique ou arraste uma imagem" setFiles={setFiles} />
        ) : (
          <div style={divStyle} alt="">
            <input
              ref={fileInputRef}
              className="file-input"
              type="file"
              onChange={handleFile}
            />

            <div className="button-group">
              <button onClick={handleClickInput}>Substituir</button>
              {starred === selectedChip ? (
                <button onClick={handleUnStarred}>Desfavoritar</button>
              ) : (
                <button onClick={handleStarred}>Favoritar</button>
              )}
              <button onClick={handleDelete}>Excluir</button>
            </div>
          </div>
        )}
      </article>

      <article className="count-group">
        {files.map((data, i) => (
          <DropZoneCount
            key={i}
            index={i}
            className="chip"
            onClick={setSelectedChip}
            starred={starred}
          />
        ))}

        <span className="last-span" onClick={() => setSelectedChip(-1)}>
          +
        </span>
      </article>
      <Button
        className="button-dragndrop"
        to="RegisterEpisodes/HunterXHunter"
        text="Cadastrar Episódios"
      />
    </section>
  );
}

export default DropZoneContainer;
