import React from "react";
//assets
import photo from "../../assets/images/ditto.png";
import settingsIcon from "../../assets/icons/config.svg";
import commentsIcon from "../../assets/icons/comments.svg";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import fappedIcon from "../../assets/icons/fapped.svg";
import taxonomiesIcon from "../../assets/icons/taxonomias.svg";
import notificationsIcon from "../../assets/icons/notifications.svg";
import usersIcon from "../../assets/icons/users.svg";
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
      <h2>Peppa</h2>
      <p>Membro desde 17/08/2020</p>

      <MenuButton to="home" initial icon={dashboardIcon} text="Home" />
      <MenuButton to="settings" icon={settingsIcon} text="Configurações" />
      <MenuButton to="faplist" icon={fappedIcon} text="Lista de Fap" />
      <MenuButton to="status" icon={settingsIcon} text="Status Geral" />
      <MenuButton
        to="notifications"
        icon={notificationsIcon}
        text="Notificações"
      />

      <DropDownMenu text="Hentais" icon={settingsIcon}>
        <DropDownButton text="Todos Hentais" to="allhentais" />
        <DropDownButton text="Cadastrar Hentais" to="registerhentais" />
      </DropDownMenu>

      <DropDownMenu text="Episódios" icon={settingsIcon}>
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
