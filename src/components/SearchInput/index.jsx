import React from "react";
//css
import "./styles.scss";
//assets
import searchIcon from "../../assets/icons/search.svg";

function SearchInput({ value, onChange }) {
  return (
    <section className="search-input">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="search"
        placeholder="Pesquisar"
      ></input>
      <img src={searchIcon} alt="" />
    </section>
  );
}

export default SearchInput;
