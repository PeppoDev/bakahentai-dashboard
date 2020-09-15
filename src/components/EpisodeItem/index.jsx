import React from "react";
//components
import DropZoneContainer from "../DropZoneContainer";
import MainInput from "../Input";
import InputVideo from "../InputVideo";
import * as Radio from "../Radio";
import Popover from "@material-ui/core/Popover";
//css
import "./styles.scss";
//assets
import playIcon from "../../assets/icons/play.svg";
import exclamationIcon from "../../assets/icons/exclamation.svg";

export default function EpisodeItem({ id, name }) {
  const [showItens, setShowItens] = React.useState(true);
  const [, setFiles] = React.useState([]);
  const [hour, setHour] = React.useState(0);
  const [, setVisibility] = React.useState("");

  const radioRef = React.useRef();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPop = open ? "simple-popover" : undefined;

  const radioClick = () => {
    radioRef.current.click();
  };

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
                poptext="É necessário um total de 9 imagens para o cadastro ser
                    concluído, a imagem favoritada será usada como thumbnail e
                    as demais como previews"
                text="Clique ou arraste uma imagem de até 1280x720"
                limit={9}
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
                refInput={radioRef}
              />
              <input
                htmlFor="visbility-input"
                className="hour-input"
                type="number"
                onChange={(e) => setHour(e.target.value)}
                onClick={radioClick}
              />
              <label htmlFor="visbility-input" className="hour-label">
                Hora(s)
              </label>
              <img src={exclamationIcon} alt="" onClick={handleClick} />
              <Popover
                id={idPop}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <span className="popover">
                  <p>
                    Esta opção deixará o episódio bloqueado apenas para usuários
                    Premiums de acordo com o "X" de horas que for estabelecido.
                  </p>
                  <p>Logo após este período de será liberado a todos.</p>
                </span>
              </Popover>
            </Radio.RadioForm>
          </div>
        </>
      ) : null}
    </article>
  );
}
