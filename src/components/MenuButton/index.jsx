import React from "react";
import { Link } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import allActions from "../../store/actions";
//css
import "./styles.scss";

function MenuButton({ icon, text, to, initial, className }) {
  const style = className + " section-button";
  console.log(style);
  const dispatch = useDispatch();
  return (
    <Link
      to={initial ? "/" : `/${to}`}
      className={style}
      onClick={() => dispatch(allActions.pageActions.changePage(to))}
    >
      <img src={icon} alt="" />
      {text}
    </Link>
  );
}

export default MenuButton;
