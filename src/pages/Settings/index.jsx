import React from "react";
//components
import InputSettings from "../../components/InputSettings";
//css
import "./styles.scss";
//assets
import ditto from "../../assets/images/ditto.png";
import tick from "../../assets/icons/tick.png";

function Settings() {
  const [isEditing, setIsEditing] = React.useState(false);
  return (
    <section className="page-container settings">
      <article className="image-banner" />
      <article className="account-banner">
        <div className="account-photo">
          <img src={ditto} alt="" />
          <img src="" alt="" />
          <p>
            Astolfo <img src={tick} alt="" />
          </p>
        </div>
        <p className="date">Membro desde: 01/05/2020</p>
      </article>

      <section>
        <article className="input-box">
          <button
            className="edit-button"
            onClick={() => setIsEditing(true)}
            style={!isEditing ? null : { opacity: "0%", cursor: "auto" }}
          >
            Editar
          </button>

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
          {isEditing ? (
            <span>
              <button onClick={() => isEditing(false)}>Cancelar</button>
              <button onClick={() => isEditing(false)}>Salvar</button>
            </span>
          ) : (
            <>
              <h3>Tipo de Conta</h3>
              <a href="#">Tornar Premium</a>
            </>
          )}
        </article>
      </section>
    </section>
  );
}

export default Settings;
