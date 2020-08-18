import React from "react";
//assets
import logo from "../../assets/images/logo.png";
import photo from "../../assets/images/ditto.png";
import BellIcon from "../../assets/icons/bell.svg";
import SearchIcon from "../../assets/icons/search.svg";
//css
import "./styles.scss";

function Bar() {
  return (
    <nav className="bar">
      <span className="left-group">
        <img src={logo} alt="" />
        <p className="bar-text">Aleatório</p>
        <p className="bar-text">Hentais</p>
        <p className="bar-text">Top 10</p>
      </span>

      <span className="right-group">
        <img src={SearchIcon} alt="" className="bar-icon" />
        <img src={BellIcon} alt="" className="bar-icon" />
        <img src={photo} alt="" />
      </span>
    </nav>
  );
}

export default Bar;
