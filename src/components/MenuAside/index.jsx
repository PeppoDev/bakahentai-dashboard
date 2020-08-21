import React from "react";  
//assets
import photo from "../../assets/images/ditto.png";
import settingsIcon from "../../assets/icons/settings.svg";
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

      <MenuButton to="home" initial icon={settingsIcon} text="Home" />
      <MenuButton to="settings" icon={settingsIcon} text="Configurações" />
      <MenuButton to="faplist" icon={settingsIcon} text="Lista de Fap" />
      <MenuButton to="status" icon={settingsIcon} text="Status Geral " />
      <MenuButton to="notifications" icon={settingsIcon} text="Notificações" />

      <DropDownMenu text="Hentais" icon={settingsIcon}>
        <DropDownButton text="Todos Hentais" to="hentais" />
        <DropDownButton text="Cadastrar Hentais" to="hentais" />
      </DropDownMenu>

      <DropDownMenu text="Episodes" icon={settingsIcon}>
        <DropDownButton text="Todos Episódios" to="episodes" />
        <DropDownButton text="Cadastrar Episódios" to="episodes" />
      </DropDownMenu>

      <MenuButton to="taxonomies" icon={settingsIcon} text="Taxonomias" />

      <MenuButton to="users" icon={settingsIcon} text="Usuários" />

      <MenuButton to="comments" icon={settingsIcon} text="Comentários" />
    </aside>
  );
}

export default MenuAside;
