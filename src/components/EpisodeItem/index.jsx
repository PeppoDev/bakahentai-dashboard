import React from "react";
//components
import DropZone from "../DropZone";
import MainInput from "../Input";
import InputVideo from "../InputVideo";
import * as Radio from "../Radio";
//css
import "./styles.scss";
//assets
import playIcon from "../../assets/icons/play.svg";
import PreviewGroup from "../PreviewGroup";

export default function EpisodeItem({ id, name }) {
  const [showItens, setShowItens] = React.useState(true);
  const [file, setFile] = React.useState("");
  const [hour, setHour] = React.useState(0);
  const [visibility, setVisibility] = React.useState("");

  const fileInputRef = React.useRef();

  const divStyle =
    file !== ""
      ? {
          backgroundImage: "url(" + file + ")",
        }
      : null;

  function handleDelete() {
    setFile("");
  }

  function handleClickInput() {
    fileInputRef.current.click();
  }

  function handleReplace() {
    if (fileInputRef.current.files.length) {
      if (fileInputRef.current.files[0].type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(fileInputRef.current.files[0]);
        reader.onload = function (e) {
          setFile(reader.result);
        };
      } else {
        console.log("Erro: formato não suportado");
      }
    }
  }
  return (
    <article className="register-episodes-container">
      <div
        className={`episode-banner ${
          showItens ? "animation-img" : "animation-img-close"
        }`}
        onClick={() => setShowItens(showItens ? false : true)}
      >
        <img src={playIcon} alt="" />
        <p>{`Episódio ${id}`}</p>
      </div>

      {showItens ? (
        <>
          <article className="grid-episode-item">
            <input
              ref={fileInputRef}
              className="file-input"
              type="file"
              onChange={handleReplace}
            />
            <article className="main-left">
              <MainInput
                valueName={name}
                className="input-episodes"
                label="Título do Hentai Selecionado"
                placeholder="Ex. Algum anime"
              />
              <MainInput
                className="input-episodes"
                label="Número de Episódios"
                placeholder="Ex. Algum anime"
              />
              <MainInput
                className="input-episodes"
                label="M3U8"
                placeholder="Ex. Algum anime"
              />
            </article>
            <article
              className="main-right"
              style={
                file === ""
                  ? { border: "2px dotted grey" }
                  : { border: "2px dotted #2f2e2e" }
              }
            >
              {file !== "" ? (
                <div style={divStyle} className="image-container" alt="">
                  <div className="button-group">
                    <button onClick={handleClickInput}>Substituir</button>
                    <button onClick={handleDelete}>Excluir</button>
                  </div>
                </div>
              ) : (
                <DropZone
                  text="Clique ou arraste uma imagem de até 1280x720"
                  setFiles={setFile}
                />
              )}
            </article>
          </article>
          <PreviewGroup />
          <InputVideo />
          <div className="radio-form">
            <Radio.RadioForm
              text="Opções de visibilidade"
              onChange={setVisibility}
            >
              <Radio.RadioInput
                value="all"
                name="visibility"
                text="Visível a todos"
              />
              <Radio.RadioInput
                value="premiums"
                name="visibility"
                text="Visível a Premiums"
              />
              <Radio.RadioInput
                value={hour}
                name="visibility"
                text="Liberar a todos em:"
              />
              <input
                htmlFor="visbility-input"
                className="hour-input"
                type="text"
                onChange={(e) => setHour(e.target.value)}
              />
              <label htmlFor="visbility-input" className="hour-label">
                Hora(s)
              </label>
            </Radio.RadioForm>
          </div>
        </>
      ) : null}
    </article>
  );
}
