import React from "react";
//css
import "./styles.scss";
//components
import MainInput from "../../components/Input";
import * as ComboBox from "../../components/ComboBox";

function RegisterHentais() {
  return (
    <section className="page-container register-hentais">
      <h2>Hentais</h2>
      <MainInput label="Título do Hentai" placeholder="Ex. Algum anime" />
      <ComboBox.ComboSelect htmlFor="tags">
        <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
        <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
        <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
        <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
      </ComboBox.ComboSelect>
    </section>
  );
}

export default RegisterHentais;
