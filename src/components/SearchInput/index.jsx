import React from "react";
//css
import "./styles.scss";
//assets
import searchIcon from "../../assets/icons/search.svg";

function SearchInput() {
  return (
    <section className="search-input">
      <input type="search" placeholder="Pesquisar"></input>
      <img src={searchIcon} alt="" />
    </section>
  );
}

export default SearchInput;
