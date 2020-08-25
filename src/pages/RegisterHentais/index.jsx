import React from "react";
import { Link } from "react-router-dom";
//css
import "./styles.scss";
//components
import MainInput from "../../components/Input";
import * as ComboBox from "../../components/ComboBox";
import * as Radio from "../../components/Radio";
import TextArea from "../../components/TextArea";

import DragNDrop from "../../components/DragNDrop";
import Button from "../../components/MenuButton";
import TitlePage from "../../components/TitlePage";

//assets
import backIcon from "../../assets/icons/back.png";

function RegisterHentais() {
  return (
    <section className="page-container register-hentais">
      <TitlePage text="Cadastrar Hentai" />
      <article className="register-hentais-container">
        <article className="main-left">
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

          <div className="group-radio">
            <Radio.RadioForm text="Censura">
              <Radio.RadioInput
                value={true}
                name="censorship"
                text="Com Censura"
              />
              <Radio.RadioInput
                value={false}
                name="censorship"
                text="Sem Censura"
              />
            </Radio.RadioForm>

            <Radio.RadioForm text="Qualidade">
              <Radio.RadioInput value="1080" name="quality" text="1080p" />
              <Radio.RadioInput value="720" name="quality" text="720p" />
            </Radio.RadioForm>
          </div>

          <article className="input-n-select">
            <MainInput
              type="search"
              label="Gênero"
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
          <Radio.RadioForm text="status">
            <Radio.RadioInput
              value="false"
              name="hentai_status"
              text="Lançamento"
            />
            <Radio.RadioInput
              value="true"
              name="hentai_status"
              text="Completo"
            />
          </Radio.RadioForm>
        </article>
        <article className="main-right">
          <DragNDrop countGroup />
          <Button
            className="button-dragndrop"
            to="RegisterEpisodes"
            text="Cadastrar Episódios"
          />
        </article>
      </article>
    </section>
  );
}

export default RegisterHentais;
