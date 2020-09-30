import React from "react";
//assets
import photo from "../../assets/images/ditto.png";
import settingsIcon from "../../assets/icons/config.svg";
import commentsIcon from "../../assets/icons/comments.svg";
import fappedIcon from "../../assets/icons/fapped.svg";
import taxonomiesIcon from "../../assets/icons/taxonomias.svg";
import notificationsIcon from "../../assets/icons/notifications.svg";
import usersIcon from "../../assets/icons/users.svg";
import statusIcon from "../../assets/icons/tools.svg";
import episodesIcon from "../../assets/icons/image.svg";
import hentaiIcon from "../../assets/icons/play.svg";
import tick from "../../assets/icons/tick.png";
//css
import "./styles.scss";
//components
import MenuButton from "../MenuButton";
import DropDownMenu from "../DropDownMenu";
import DropDownButton from "../DropDownButton";

function MenuAside() {
  return (
    <aside className="menu-container">
      <img src={photo} alt="" />

      <span className="profile-container">
        <p>Astolfo</p>
        <img className="badge-name" src={tick} alt="" />
        <img className="badge-name" src={tick} alt="" />
        <img className="badge-name" src={tick} alt="" />
      </span>
      <p>Membro desde 17/08/2020</p>

      <MenuButton to="settings" icon={settingsIcon} text="Configurações" />
      <MenuButton to="faplist" icon={fappedIcon} text="Lista de Fap" />
      <MenuButton to="status" initial icon={statusIcon} text="Status Geral" />
      <MenuButton
        to="notifications"
        icon={notificationsIcon}
        text="Notificações"
      />

      <DropDownMenu text="Hentais" icon={hentaiIcon}>
        <DropDownButton text="Todos Hentais" to="allhentais" />
        <DropDownButton text="Cadastrar Hentais" to="registerhentais" />
      </DropDownMenu>

      <DropDownMenu text="Episódios" icon={episodesIcon}>
        <DropDownButton text="Todos Episódios" to="allepisodes" />
        <DropDownButton text="Cadastrar Episódios" to="registerepisodes" />
      </DropDownMenu>

      <MenuButton to="taxonomies" icon={taxonomiesIcon} text="Taxonomias" />

      <MenuButton to="users" icon={usersIcon} text="Usuários" />

      <MenuButton to="comments" icon={commentsIcon} text="Comentários" />
    </aside>
  );
}

export default MenuAside;
