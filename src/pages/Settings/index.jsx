import React, { useRef } from "react";
import { useParams } from "react-router-dom";
//components
import InputSettings from "../../components/InputSettings";
import FapList from "../FapList";
import ModalPunish from "../../components/ModalPunish";
//css
import "./styles.scss";
//assets
import tick from "../../assets/icons/tick.png";
import pen from "../../assets/icons/pen.svg";
// import prev from "../../assets/images/preview.jpg";
// import dtto from "../../assets/images/ditto.png";

function Settings() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isPunishing, setisPunishing] = React.useState(false);
  const [filePhoto, setFilePhoto] = React.useState([]);
  const [fileBanner, setFileBanner] = React.useState(
    "../../assets/images/preview.jpg"
  );

  const { id } = useParams();

  const InputRef2 = useRef("");
  const InputRef1 = useRef("");

  const PhotoStyle =
    filePhoto !== []
      ? { background: `url(${filePhoto}) !important` }
      : { color: "red" };

  const BannerStyle = {
    backgroundImage: `url(${fileBanner}) !important`,
  };

  function handleClickFileBanner() {
    InputRef1.current.click();
  }
  function handleClickFilePhoto() {
    InputRef2.current.click();
  }

  const fileSelectedBanner = () => {
    if (InputRef1.current.files.length) {
      if (InputRef1.current.files[0].type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(InputRef1.current.files[0]);
        reader.onload = function (e) {
          setFileBanner(reader.result);
        };
      } else {
        console.log("Erro: formato não suportado");
      }
    }
  };

  const fileSelectedPhoto = () => {
    if (InputRef2.current.files.length) {
      if (InputRef2.current.files[0].type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(InputRef2.current.files[0]);
        reader.onload = function (e) {
          setFilePhoto(reader.result);
        };
      } else {
        console.log("Erro: formato não suportado");
      }
    }
  };

  return (
    <>
      <section className="page-container settings">
        <input
          type="file"
          ref={InputRef1}
          style={{ display: "none" }}
          onChange={fileSelectedBanner}
        />
        <input type="file" ref={InputRef2} style={{ display: "none" }} />
        <article
          className="image-banner"
          style={{ background: `url(${filePhoto}) !important` }}
        >
          <img src={pen} alt="" onClick={handleClickFileBanner} />
        </article>
        <article className="account-banner">
          <div className="account-photo">
            <article className="profile-photo" alt="" style={PhotoStyle}>
              <img src={pen} alt="" onClick={handleClickFilePhoto} />
            </article>
            <img src="" alt="" />
            <span className="profile-container">
              <p>Astolfo</p>
              <img className="badge-name" src={tick} alt="" />
              <img className="badge-name" src={tick} alt="" />
              <img className="badge-name" src={tick} alt="" />
            </span>
          </div>
          <p className="date">Membro desde: 01/05/2020</p>
        </article>

        <section>
          <article className="input-box">
            <div className="button-group-settings">
              <button
                className="edit-button"
                onClick={() => setIsEditing(true)}
                style={!isEditing ? null : { opacity: "0%", cursor: "auto" }}
              >
                Editar
              </button>

              {id ? (
                <button
                  className="edit-button"
                  onClick={() => setisPunishing(true)}
                  style={
                    !isPunishing ? null : { opacity: "100%", cursor: "auto" }
                  }
                >
                  Punir
                </button>
              ) : null}
            </div>

            <article>
              <InputSettings
                disable={isEditing ? false : true}
                label="E-mail"
                placeholder="Algum email"
              />
              <InputSettings
                disable={isEditing ? false : true}
                label="Senha"
                placeholder="******"
              />
              <InputSettings
                disable={isEditing ? false : true}
                label="Seu Site"
                placeholder="N/A"
              />
            </article>

            <footer>
              {isEditing ? (
                <span>
                  <button onClick={() => setIsEditing(false)}>Cancelar</button>
                  <button onClick={() => setIsEditing(false)}>Salvar</button>
                </span>
              ) : (
                <>
                  <h3>Tipo de Conta</h3>
                  <a href="#">Tornar Premium</a>
                </>
              )}
            </footer>
          </article>
        </section>
      </section>
      {(isEditing || id) && <FapList />}
      <ModalPunish open={isPunishing} setOpen={setisPunishing} />
    </>
  );
}

export default Settings;
