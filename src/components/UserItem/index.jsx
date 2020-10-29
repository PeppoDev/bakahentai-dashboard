import React from "react";
//styles
import "./styles.scss";
//assets
import photo from "../../assets/images/ditto.png";

export default function UserItem() {
  return (
    <article className="user-item">
      <div className="profile-name-photo">
        <img src={photo} alt="" />
        <h2>Peppa</h2>
        <p>17/08/2020</p>
      </div>
      <button className="edit-button">Editar</button>
    </article>
  );
}
