import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
//css
import "./styles.scss";
//components
import MainInput from "../../components/Input";
import * as ComboBox from "../../components/ComboBox";
import * as Radio from "../../components/Radio";
import TextArea from "../../components/TextArea";
//assets
import backIcon from "../../assets/icons/back.png";

const tags = ["Ahegao1", "Ahegao2", "Ahegao3", "Ahegao4", "Ahegao"];

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

        <div className="group-radio">
          <Radio.RadioForm text="Qualidade">
            <Radio.RadioInput value="1080" name="quality" text="1080p" />
            <Radio.RadioInput value="720" name="quality" text="720p" />
          </Radio.RadioForm>

          <Radio.RadioForm text="Qualidade">
            <Radio.RadioInput value="1080" name="quality" text="1080p" />
            <Radio.RadioInput value="720" name="quality" text="720p" />
          </Radio.RadioForm>
        </div>

        <article className="input-n-select">
          <Autocomplete
            size="medium"
            multiple
            limitTags={3}
            id="multiple-limit-tags"
            options={tags}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
                variant="outlined"
              />
            )}
          />
        </article>

        <TextArea text="História" />
        <Radio.RadioForm text="status">
          <Radio.RadioInput
            value="false"
            name="hentai_status"
            text="Lançamento"
          />
          <Radio.RadioInput value="true" name="hentai_status" text="Completo" />
        </Radio.RadioForm>
      </article>
    </section>
  );
}

export default RegisterHentais;
