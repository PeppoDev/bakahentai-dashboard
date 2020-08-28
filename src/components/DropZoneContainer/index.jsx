import React from "react";
import DropZone from "../DropZone";
import Button from "../../components/MenuButton";
import DropZoneCount from "../DropZoneCount";

//css
import "./styles.scss";

function DropZoneContainer() {
  const [files, setFiles] = React.useState([]);
  const [selectedChip, setSelectedChip] = React.useState(-1);

  function handleDelete(key) {
    const newFiles = Array.from(files);
    newFiles.splice(key, 1);
    setFiles(newFiles);
  }

  function handleReplace(key, file) {
    let newFiles = Array.from(files);
    newFiles[key] = file;
    setFiles(newFiles);
  }

  const fileInputRef = React.useRef();

  return (
    <section className="dragndrop-container">
      <article className="dragndrop-main-container">
        {selectedChip === -1 ? (
          <DropZone
            setFiles={setFiles}
            fileInputRef={fileInputRef}
            lenght={files.length}
          />
        ) : (
          <img src={files[selectedChip]} alt="" />
        )}
      </article>

      <article className="count-group">
        <div>
          {files.map((data, i) => (
            // <span key={i} onClick={() => setSelectedChip(i)}>
            //   {i + 1}
            // </span>
            <DropZoneCount
              key={i}
              index={i}
              className="chip"
              onClick={setSelectedChip}
              onDelete={handleDelete}
              onChange={handleReplace}
              fileInputRef={fileInputRef}
            />
          ))}
        </div>

        <span className="last-span" onClick={() => setSelectedChip(-1)}>
          +
        </span>
      </article>
      <Button
        className="button-dragndrop"
        to="RegisterEpisodes"
        text="Cadastrar Episódios"
      />
    </section>
  );
}

export default DropZoneContainer;
