import React from "react";
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

//assets

function RegisterHentais() {
  const [title, setTitle] = React.useState("");
  const [original_title, setOriginal_title] = React.useState("");
  const [studio, setStudio] = React.useState("");
  const [realeasey, setRealeasey] = React.useState("");
  const [censorship, setCensorship] = React.useState("");
  const [quality, setQuality] = React.useState("");
  const [tagsTemp, setTagsTemp] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [synopsis, setSynopsis] = React.useState("");
  const [status, setStatus] = React.useState(false);

  const [showButton, setShowButton] = React.useState(false);

  const studio_json = {
    0: {
      value: 0,
      text: "Studio 1",
    },
    1: {
      value: 1,
      text: "Studio 2",
    },
    2: {
      value: 2,
      text: "Studio 3",
    },
    3: {
      value: 3,
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
      status !== false
    ) {
      setShowButton(true);
    }
  }

  function handleRemoveBadge(key) {
    console.log(key);
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
      const newtags = tagsTemp.replace(" ", "").split(",");
      newtags.map((tag) => {
        setTags((prev) => [...prev, tag]);
      });
      setTagsTemp("");
    }
  }

  function handleSetTags(value) {
    setTags((prev) => [...prev, value]);
  }

  return (
    <section className="page-container register-hentais" onClick={verify}>
      <TitlePage text="Cadastrar Hentai" />
      <article className="register-hentais-container">
        <article className="main-left">
          <MainInput
            label="Título do Hentai"
            placeholder="Ex. Algum anime"
            value={title}
            onChange={setTitle}
          />
          <MainInput
            label="Título Original"
            placeholder="Ex. Algum anime"
            value={original_title}
            onChange={setOriginal_title}
          />
          <article className="input-n-select">
            <MainInput
              type="search"
              label="Estúdio"
              placeholder="Ex. Algum anime"
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
            placeholder="Ex. Algum anime"
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
              label="Gênero"
              placeholder="Ex. Algum anime"
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
          <DropZoneContainer />
        </article>
      </article>

      {showButton ? (
        <button className="register-button" onClick={handleSend}>
          Cadastrar
        </button>
      ) : null}
    </section>
  );
}

export default RegisterHentais;
