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

  React.useEffect(() => {
    setSelectedChip(files.length >= 1 ? files.length - 1 : -1);
  }, [files]);

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

  function handleReplace() {
    if (fileInputRef.current.files.length) {
      if (fileInputRef.current.files[0].type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(fileInputRef.current.files[0]);
        reader.onload = function (e) {
          let newFiles = Array.from(files);
          newFiles[selectedChip] = reader.result;
          setFiles(newFiles);
        };
      } else {
        console.log("Erro: formato não suportado");
      }
    }
  }

  async function handleFile() {
    const files = fileInputRef.current.files;
    const newFiles = Object.values(files);

    newFiles.map((file) => {
      console.log(file);
      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          setFiles((prev) => prev.concat(reader.result));
        };
      } else {
        console.log("Erro: formato não suportado");
      }
      return null;
    });
  }
  function handleStarred() {
    setStarred(selectedChip);
  }

  function handleUnStarred() {
    setStarred(-1);
  }

  return (
    <section className="dragndrop-container">
      <article
        className="dragndrop-main-container"
        style={
          selectedChip === -1
            ? { border: "2px dotted grey" }
            : { border: "2px dotted #2f2e2e" }
        }
      >
        {selectedChip === -1 ? (
          <DropZone text="Clique ou arraste uma imagem" setFiles={setFiles} />
        ) : (
          <div style={divStyle} className="image-container" alt="">
            <input
              ref={fileInputRef}
              className="file-input"
              type="file"
              onChange={handleReplace}
            />
            <input
              multiple
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

        <span className="last-span" onClick={handleClickInput}>
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
