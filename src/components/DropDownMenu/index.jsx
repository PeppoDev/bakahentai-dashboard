import React from "react";

//assets
import arrowIcon from "../../assets/icons/arrow.svg";
//css
import "./styles.scss";

export default function DropDownMenu(props) {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <button
        to="/hentais"
        className="dropdown-menu"
        onClick={() => setShowMenu(showMenu ? false : true)}
      >
        <article>
          <img src={props.icon} alt="" />
          {props.text}
        </article>
        <img className="sub-icon" src={arrowIcon} alt="" />
      </button>

      {showMenu ? props.children : null}
    </>
  );
}
