import React from "react";
import { Link } from "react-router-dom";
//assets
import photo from "../../assets/images/ditto.png";
//css
import "./styles.scss";
//react-redux
import { useDispatch } from "react-redux";
import allActions from "../../store/actions";

function MenuAside() {
  const dispatch = useDispatch();

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
        Home
      </Link>
      <Link
        to="/settings"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("settings"))}
      >
        Configurações
      </Link>
      <Link
        to="/faplist"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("faplist"))}
      >
        Lista de Fap
      </Link>
      <Link
        to="/status"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("status"))}
      >
        Status Geral
      </Link>
      <Link
        to="/notifications"
        className="section-button"
        onClick={() =>
          dispatch(allActions.pageActions.changePage("notifications"))
        }
      >
        Notificações
      </Link>
      <Link
        to="/hentais"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("hentais"))}
      >
        Hentais
      </Link>
      <Link
        to="/episodes"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("episodes"))}
      >
        Episódios
      </Link>
      <Link
        to="/taxonomies"
        className="section-button"
        onClick={() =>
          dispatch(allActions.pageActions.changePage("taxonomies"))
        }
      >
        Taxonomias
      </Link>
      <Link
        to="/users"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("users"))}
      >
        Usuários
      </Link>
      <Link
        to="/comments"
        className="section-button"
        onClick={() => dispatch(allActions.pageActions.changePage("comments"))}
      >
        Comentários
      </Link>
    </aside>
  );
}

export default MenuAside;
