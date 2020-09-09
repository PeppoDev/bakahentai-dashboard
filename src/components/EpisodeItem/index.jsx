import React from "react";
//components
import DropZoneContainer from "../DropZoneContainer";
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
  const [files, setFiles] = React.useState([]);
  const [hour, setHour] = React.useState(0);
  const [visibility, setVisibility] = React.useState("");

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
            <article className="main-right">
              <DropZoneContainer
                text="Clique ou arraste uma imagem de até 1280x720"
                limit={8}
                setFiles={setFiles}
              />
            </article>
          </article>
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
