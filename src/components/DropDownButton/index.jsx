import React from "react";
import { Link } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import allActions from "../../store/actions";
//css
import "./styles.scss";

function DropDownButton({ icon, text, to, initial }) {
  const dispatch = useDispatch();
  return (
    <Link
      to={initial ? "/" : `/${to}`}
      className="dropdown-button"
      onClick={() => dispatch(allActions.pageActions.changePage(to))}
    >
      {text}
    </Link>
  );
}

export default DropDownButton;
