import React from "react";
import { Link } from "react-router-dom";
//css
import "./styles.scss";
//components
import MainInput from "../../components/Input";
import * as ComboBox from "../../components/ComboBox";
import RadioButton from "../../components/Radio";
import TextArea from "../../components/TextArea";

//assets
import backIcon from "../../assets/icons/back.png";

function RegisterHentais() {
  return (
    <section className="page-container register-hentais">
      <p className="page-title">
        <Link to="/">
          <img className="backicon" src={backIcon} alt="" />
        </Link>
        Cadastrar Hentais
      </p>
      <hr />
      <article className="register-hentais-container">
        <MainInput label="Título do Hentai" placeholder="Ex. Algum anime" />
        <MainInput label="Título Original" placeholder="Ex. Algum anime" />

        <article className="input-n-select">
          <MainInput
            type="search"
            label="Estúdio"
            placeholder="Ex. Algum anime"
          />
          <ComboBox.ComboSelect htmlFor="tags">
            <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
            <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
            <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
            <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
          </ComboBox.ComboSelect>
        </article>

        <MainInput label="Ano Lançado" placeholder="Ex. Algum anime" />

        <article className="radio-form">
          <p>
            Censura<span>*</span>:
          </p>
          <RadioButton value="false" name="censura" text="Sem Censura" />
          <RadioButton value="true" name="censura" text="Com Censura" />
        </article>

        <article className="input-n-select">
          <MainInput
            type="search"
            label="Gêneros"
            placeholder="Ex. Algum anime"
          />
          <ComboBox.ComboSelect htmlFor="tags">
            <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
            <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
            <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
            <ComboBox.ComboItem value="1" text="Ahegao"></ComboBox.ComboItem>
          </ComboBox.ComboSelect>
        </article>

        <TextArea text="História" />
        <article className="radio-form">
          <p>
            Status<span>*</span>:
          </p>
          <RadioButton value="false" name="hentai_status" text="Lançamento" />
          <RadioButton value="true" name="hentai_status" text="Completo" />
        </article>
      </article>
    </section>
  );
}

export default RegisterHentais;
