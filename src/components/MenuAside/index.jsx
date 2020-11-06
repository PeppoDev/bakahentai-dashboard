import React from "react";
//components
import MenuButton from "../MenuButton";
import DropDownMenu from "../DropDownMenu";
import DropDownButton from "../DropDownButton";
import { Link } from "react-router-dom";
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

function MenuAside() {
  return (
    <aside className="menu-container">
      <img src={photo} alt="" />

      <span className="profile-container">
        <Link to="Configuracoes" style={{ textDecoration: "none" }}>
          <h2>Astolfo</h2>
        </Link>
        <img className="badge-name" src={tick} alt="" />
        <img className="badge-name" src={tick} alt="" />
        <img className="badge-name" src={tick} alt="" />
      </span>
      <p>Membro desde 17/08/2020</p>

      <MenuButton to="Configuracoes" icon={settingsIcon} text="Configurações" />
      <MenuButton to="ListaDeFap" icon={fappedIcon} text="Lista de Fap" />
      <MenuButton to="status" initial icon={statusIcon} text="Dashboard" />
      <MenuButton
        to="Notificacoes"
        icon={notificationsIcon}
        text="Notificações"
      />

      <DropDownMenu text="Hentais" icon={hentaiIcon}>
        <DropDownButton text="Todos Hentais" to="TodosHentais" />
        <DropDownButton text="Cadastrar Hentais" to="HentaisRegistrados" />
      </DropDownMenu>

      <DropDownMenu text="Episódios" icon={episodesIcon}>
        <DropDownButton text="Todos Episódios" to="TodosEpisodios" />
        <DropDownButton text="Cadastrar Episódios" to="EpisodiosRegistrados" />
      </DropDownMenu>

      <MenuButton to="Taxonomias" icon={taxonomiesIcon} text="Taxonomias" />

      <MenuButton to="Usuario" icon={usersIcon} text="Usuários" />

      <MenuButton to="Comentarios" icon={commentsIcon} text="Comentários" />
    </aside>
  );
}

export default MenuAside;
