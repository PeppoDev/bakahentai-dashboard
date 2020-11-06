import React from "react";
import { Link } from "react-router-dom";
//styles
import "./styles.scss";
//assets
import photo from "../../assets/images/ditto.png";
import tick from "../../assets/icons/tick.png";

export default function UserItem() {
  return (
    <article className="user-item">
      <div className="profile-name-photo">
        <img src={photo} alt="" />
        <span className="profile-container">
          <h2>Astolfo</h2>
          <img className="badge-name" src={tick} alt="" />
          <img className="badge-name" src={tick} alt="" />
          <img className="badge-name" src={tick} alt="" />
        </span>
        <p>17/08/2020</p>
      </div>
      <Link to={`Configuracoes/${1}`}>
        <button className="edit-button">Editar</button>
      </Link>
    </article>
  );
}
