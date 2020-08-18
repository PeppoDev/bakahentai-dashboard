import React from "react";
import { Link } from "react-router-dom";
//css
import "./styles.scss";
//assets
import hentaisIcon from "../../assets/icons/hentais.png";
import episodesIcon from "../../assets/icons/episodes.png";
import usersIcon from "../../assets/icons/users.png";
import commentsIcon from "../../assets/icons/comments.png";

//react-redux
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../store/actions";

function QuickAcess() {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  return (
    <article className="quick-acess">
      <Link to="/hentais">
        <div
          className={
            (page === "hentais" && "button-box active-button") || "button-box"
          }
          onClick={() => dispatch(allActions.pageActions.changePage("hentais"))}
        >
          <img src={hentaisIcon} alt="" />
          <span>
            <p>Hentais</p>
            <h2>57</h2>
          </span>
        </div>
      </Link>

      <Link to="/episodes">
        <div
          className={
            (page === "episodes" && "button-box active-button") || "button-box"
          }
          onClick={() =>
            dispatch(allActions.pageActions.changePage("episodes"))
          }
        >
          <img src={episodesIcon} alt="" />
          <span>
            <p>Episódios</p>
            <h2>57</h2>
          </span>
        </div>
      </Link>

      <Link to="/users">
        <div
          className={
            (page === "users" && "button-box active-button") || "button-box"
          }
          onClick={() => dispatch(allActions.pageActions.changePage("users"))}
        >
          <img src={usersIcon} alt="" />
          <span>
            <p>Usuários</p>
            <h2>57</h2>
          </span>
        </div>
      </Link>

      <Link to="/comments">
        <div
          className={
            (page === "comments" && "button-box active-button") || "button-box"
          }
          onClick={() =>
            dispatch(allActions.pageActions.changePage("comments"))
          }
        >
          <img src={commentsIcon} alt="" />
          <span>
            <p>Comentários</p>
            <h2>57</h2>
          </span>
        </div>
      </Link>
    </article>
  );
}

export default QuickAcess;
