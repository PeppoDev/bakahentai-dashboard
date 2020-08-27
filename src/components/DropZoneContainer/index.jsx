import React from "react";
import DropZone from "../DropZone";
import Button from "../../components/MenuButton";

//css
import "./styles.scss";

function DropZoneContainer() {
  const [files, setFiles] = React.useState([]);
  const [selectedChip, setSelectedChip] = React.useState(-1);

  return (
    <section className="dragndrop-container">
      <article className="dragndrop-main-container">
        {selectedChip === -1 ? (
          <DropZone setFiles={setFiles} lenght={files.length} />
        ) : (
          <img src={files[selectedChip]} alt="" />
        )}
      </article>

      <article className="count-group">
        {files.map((data, i) => (
          <span key={i} onClick={() => setSelectedChip(i)}>
            {i + 1}
          </span>
        ))}
        <span onClick={() => setSelectedChip(-1)}>+</span>
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
