import React from "react";
import { Link } from "react-router-dom";
//assets
import photo from "../../assets/images/ditto.png";
import settingsIcon from "../../assets/icons/settings.svg";

//css
import "./styles.scss";
//react-redux
import { useDispatch } from "react-redux";
import allActions from "../../store/actions";

function MenuAside() {
  const dispatch = useDispatch();

  const [showHentaiM, setShowHentaiM] = React.useState(false);
  const [showEpisodeM, setShowEpisodeM] = React.useState(false);

  return (
    <aside className="menu-container">
      <img src={photo} alt="" />
      <h2>Peppa</h2>
      <p>Membro desde 17/08/2020</p>
      <Link
        to="/"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("home"))}
      >
        <img className="icon-aside" src={settingsIcon} alt="" />
        Home
      </Link>
      <Link
        to="/settings"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("settings"))}
      >
        <img className="icon-aside" src={settingsIcon} alt="" />
        Configurações
      </Link>
      <Link
        to="/faplist"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("faplist"))}
      >
        <img className="icon-aside" src={settingsIcon} alt="" />
        Lista de Fap
      </Link>
      <Link
        to="/status"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("status"))}
      >
        <img className="icon-aside" src={settingsIcon} alt="" />
        Status Geral
      </Link>
      <Link
        to="/notifications"
        className="section-button"
        onClick={() =>
          dispatch(allActions.pageActions.changePage("notifications"))
        }
      >
        <img className="icon-aside" src={settingsIcon} alt="" />
        Notificações
      </Link>
      <Link
        to="/hentais"
        className="section-button"
        onClick={() =>
          dispatch(
            allActions.pageActions.changePage("hentais"),
            setShowHentaiM(showHentaiM ? false : true)
          )
        }
      >
        <img className="icon-aside" src={settingsIcon} alt="" />
        Hentais
      </Link>

      {showHentaiM ? (
        <>
          <button className="sub-button">Todos Hentais</button>
          <button className="sub-button">Cadastrar Hentais</button>
        </>
      ) : null}
      <Link
        to="/episodes"
        className="section-button"
        onClick={() =>
          dispatch(
            allActions.pageActions.changePage("episodes"),
            setShowEpisodeM(showEpisodeM ? false : true)
          )
        }
      >
        <img className="icon-aside" src={settingsIcon} alt="" />
        Episódios
      </Link>
      {showEpisodeM ? (
        <>
          <button className="sub-button">Todos Episódios</button>
          <button className="sub-button">Cadastrar Episódios</button>
        </>
      ) : null}
      <Link
        to="/taxonomies"
        className="section-button"
        onClick={() =>
          dispatch(allActions.pageActions.changePage("taxonomies"))
        }
      >
        <img className="icon-aside" src={settingsIcon} alt="" />
        Taxonomias
      </Link>
      <Link
        to="/users"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("users"))}
      >
        <img className="icon-aside" src={settingsIcon} alt="" />
        Usuários
      </Link>
      <Link
        to="/comments"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("comments"))}
      >
        <img className="icon-aside" src={settingsIcon} alt="" />
        Comentários
      </Link>
    </aside>
  );
}

export default MenuAside;
