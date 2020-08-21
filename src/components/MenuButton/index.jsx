import React from "react";
import { Link } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import allActions from "../../store/actions";
//css
import "./styles.scss";

function MenuButton({ icon, text, to, initial }) {
  const dispatch = useDispatch();
  return (
    <Link
      to={initial ? "/" : `/${to}`}
      className="section-button"
      onClick={() => dispatch(allActions.pageActions.changePage(to))}
    >
      <img src={icon} alt="" />
      {text}
    </Link>
  );
}

export default MenuButton;
