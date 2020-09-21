import React from "react";
//components
import MainInput from "../../components/Input";
//css
import "./styles.scss";
//assets
import ditto from "../../assets/images/ditto.png";
import InputSettings from "../../components/InputSettings";

function Settings() {
  const [isEditing, setIsEditing] = React.useState(false);
  return (
    <section className="page-container settings">
      <article className="image-banner" />
      <article className="account-banner">
        <div className="account-photo">
          <img src={ditto} alt="" />
          <img src="" alt="" />
          <p>Astolfo</p>
        </div>
        <p className="date">Membro desde: 01/05/2020</p>
      </article>

      <section>
        <article className="input-box">
          <button onClick={() => setIsEditing((prev) => (prev ? false : true))}>
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

          <h3>Tipo de Conta</h3>
          <a href="#">Tornar Premium</a>
        </article>
      </section>
    </section>
  );
}

export default Settings;
