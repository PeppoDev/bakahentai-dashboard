import React from "react";
import { useParams } from "react-router-dom";
//css
import "./styles.scss";
//components
import MainInput from "../../components/Input";
import * as ComboBox from "../../components/ComboBox";
import * as Radio from "../../components/Radio";
import TextArea from "../../components/TextArea";
import DropZoneContainer from "../../components/DropZoneContainer";
import TitlePage from "../../components/TitlePage";
import Badge from "../../components/Badge";
import FavoriteBanner from "../../components/FavoriteBanner";

//assets

function RegisterHentais() {
  const { id } = useParams();

  const [title, setTitle] = React.useState(id);
  const [original_title, setOriginal_title] = React.useState("");
  const [adm, setAdm] = React.useState("");
  const [studio, setStudio] = React.useState("");
  const [realeasey, setRealeasey] = React.useState("");
  const [censorship, setCensorship] = React.useState("");
  const [quality, setQuality] = React.useState("");
  const [tagsTemp, setTagsTemp] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [synopsis, setSynopsis] = React.useState("");
  const [status, setStatus] = React.useState(false);
  const [visibility, setVisibility] = React.useState("");

  const [showButton, setShowButton] = React.useState(false);

  function sortTags(newTags) {
    newTags.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    return newTags;
  }

  const studio_json = {
    0: {
      value: "Studio 1",
      text: "Studio 1",
    },
    1: {
      value: "Studio 2",
      text: "Studio 2",
    },
    2: {
      value: "Studio 3",
      text: "Studio 3",
    },
    3: {
      value: "Studio 4",
      text: "Studio 4",
    },
  };
  const studio_arr = Object.values(studio_json);

  const tags_json = {
    0: {
      value: "ahegao",
      text: "Ahegao",
    },
    1: {
      value: "ação",
      text: "Ação",
    },
    2: {
      value: "sci-fi",
      text: "Sci-fi",
    },
    3: {
      value: "musical",
      text: "Musical",
    },
  };
  const tags_arr = Object.values(tags_json);

  function verify() {
    if (
      title !== "" &&
      original_title !== "" &&
      studio !== "" &&
      realeasey !== "" &&
      censorship !== "" &&
      quality !== "" &&
      tags !== "" &&
      status !== false &&
      visibility !== false
    ) {
      setShowButton(true);
    }
  }

  function handleRemoveBadge(key) {
    const newTags = Array.from(tags);
    newTags.splice(key, 1);
    setTags(newTags);
  }
  function handleSend() {
    setTitle("");
    setOriginal_title("");
    setStudio("");
    setRealeasey("");
    setCensorship("");
    setQuality("");
    setTags([]);
    setTagsTemp("");
    setSynopsis("");
    setStatus(true);
  }
  function handleTags(event) {
    if (event.key === "Enter") {
      let newTags = tagsTemp.replace(/\s/g, "").split(",");

      newTags = sortTags([...newTags, ...tags]);
      console.log(newTags);
      setTags(newTags);
      setTagsTemp("");
    }
  }

  function handleSetTags(value) {
    let newTags = sortTags([...tags, value]);
    setTags(newTags);
  }

  return (
    <section className="page-container register-hentais" onClick={verify}>
      <TitlePage text={id ? "Editar Hentai" : "Cadastrar Hentai"} />
      <article className="register-hentais-container">
        <article className="main-left">
          <MainInput
            label="Título"
            placeholder="Ex: Oni Chichi"
            value={title}
            onChange={setTitle}
          />
          <MainInput
            label="Título Original"
            placeholder="Ex: 鬼父 "
            value={original_title}
            onChange={setOriginal_title}
          />
          <MainInput
            label="Administrador"
            placeholder="Ex: Ichidou"
            value={adm}
            onChange={setAdm}
          />
          <article className="input-n-select">
            <MainInput
              type="search"
              label="Estúdio"
              placeholder="Ex: PoRO"
              value={studio}
              onChange={setStudio}
            />
            <ComboBox.ComboSelect htmlFor="studio" onChange={setStudio}>
              {studio_arr.map((studio) => (
                <ComboBox.ComboItem
                  key={studio.value}
                  value={studio.value}
                  text={studio.text}
                ></ComboBox.ComboItem>
              ))}
              ;
            </ComboBox.ComboSelect>
          </article>
          <MainInput
            label="Ano Lançado"
            placeholder="Ex: 2010"
            type="number"
            value={realeasey}
            onChange={setRealeasey}
          />

          <div className="radio-form">
            <Radio.RadioForm text="Censura" onChange={setCensorship}>
              <Radio.RadioInput
                value="false"
                name="censorship"
                text="Com Censura"
              />
              <Radio.RadioInput
                value="true"
                name="censorship"
                text="Sem Censura"
              />
            </Radio.RadioForm>

            <Radio.RadioForm
              text="Qualidade"
              value={quality}
              onChange={setQuality}
            >
              <Radio.RadioInput value="1080" name="quality" text="1080p" />
              <Radio.RadioInput value="720" name="quality" text="720p" />
            </Radio.RadioForm>
          </div>

          <article className="input-n-select">
            <MainInput
              type="search"
              label="Gêneros"
              placeholder="Ex: Colegial, Escolar, Peitões"
              value={tagsTemp}
              onChange={setTagsTemp}
              onKeyPress={handleTags}
            />
            <ComboBox.ComboSelect
              htmlFor="tags"
              value={tags}
              onChange={(e) => handleSetTags(e)}
              multiple={true}
            >
              {tags_arr.map((tag, i) => (
                <ComboBox.ComboItem
                  key={i}
                  value={tag.value}
                  text={tag.text}
                ></ComboBox.ComboItem>
              ))}
            </ComboBox.ComboSelect>
          </article>

          <article className="badge-group">
            {tags.map((tag, index) => (
              <Badge
                text={tag}
                key={index}
                index={index}
                onClick={handleRemoveBadge}
              />
            ))}
          </article>

          <TextArea text="História" value={synopsis} onChange={setSynopsis} />
          <Radio.RadioForm text="status" value={status} onChange={setStatus}>
            <Radio.RadioInput
              value="releasing"
              name="hentai_status"
              text="Lançamento"
            />
            <Radio.RadioInput
              value="full"
              name="hentai_status"
              text="Completo"
            />
          </Radio.RadioForm>
          <Radio.RadioForm
            text="Visibilidade"
            value={status}
            onChange={setStatus}
          >
            <Radio.RadioInput
              value="all"
              name="hentai_visibility"
              text="Visível a todos"
            />
            <Radio.RadioInput
              value="hidden"
              name="hentai_visibility"
              text="Oculto da Lista"
            />
            <Radio.RadioInput
              value="only_adm"
              name="hentai_visibility"
              text="Somente Admnistrador"
            />
          </Radio.RadioForm>
        </article>
        <article className="main-right">
          <DropZoneContainer
            poptext="A imagem que estiver como favorita é a que aparecerá na listagem de todos os hentais."
            title={title}
          />
        </article>
      </article>

      {showButton ? (
        <button className="register-button" onClick={handleSend}>
          Cadastrar
        </button>
      ) : null}

      <FavoriteBanner />
    </section>
  );
}

export default RegisterHentais;
