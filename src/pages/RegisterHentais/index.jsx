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
import Button from "../../components/MenuButton";
import api from "../../services/api/axios";
import ModalSucess from "../../components/ModalSucess";
import ModalAlert from "../../components/ModalAlert";
//assets

function RegisterHentais() {
  const { id } = useParams();
  //inputs
  const [title, setTitle] = React.useState(id);
  const [original_title, setOriginal_title] = React.useState("");
  const [adm, setAdm] = React.useState("");
  const [studiosTemp, setStudiosTemp] = React.useState("");
  const [studios, setStudios] = React.useState([]);
  const [realeasey, setRealeasey] = React.useState("");
  const [censorship, setCensorship] = React.useState("");
  const [quality, setQuality] = React.useState("");
  const [tagsTemp, setTagsTemp] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [synopsis, setSynopsis] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [visibility, setVisibility] = React.useState("");
  const [files, setFiles] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  const [placholderGender, setPlacholderGender] = React.useState(
    "Ex: Colegial, Escolar, Peitões"
  );
  const [placholderStudio, setPlacholderStudio] = React.useState("Ex: PoRO");

  const [showButton, setShowButton] = React.useState(false);
  //list name genders
  const [genders, setGenders] = React.useState([]);
  const [studioDB, setStudioDB] = React.useState([]);

  //Data input
  const studio_json = [
    {
      id: 1,
      name: "Mary Jane",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 2,
      name: "Bootleg",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 3,
      name: "Bunnywalker",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 4,
      name: "Pink Pineapple",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 5,
      name: "Union Cho",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 6,
      name: "PashminaA",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 7,
      name: "Chippai",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 8,
      name: "Queen Bee",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 9,
      name: "Erozuki",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
  ];
  const studio_arr = Object.values(studio_json);

  const genders_temp = [
    {
      id: 1,
      name: "Incesto",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 2,
      name: "Escolar",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 3,
      name: "Estupro",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 4,
      name: "Traição",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 5,
      name: "Peitões",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 6,
      name: "Milf",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 7,
      name: "Colegial",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 8,
      name: "Stockings",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 9,
      name: "Anal",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 10,
      name: "Futanari",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 11,
      name: "Professora",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 12,
      name: "Romance",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 13,
      name: "Professor",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 14,
      name: "Empregadas",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 15,
      name: "Paizuri",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 16,
      name: "Footjob",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 17,
      name: "Harém",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 18,
      name: "Ahegao",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 19,
      name: "Yuri",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 20,
      name: "Dark Skin",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 21,
      name: "Loli",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 22,
      name: "Bondage",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 23,
      name: "Shotacon",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
  ];
  const tags_arr = Object.values(genders_temp);

  function verify() {
    if (
      title !== "" &&
      original_title !== "" &&
      studios !== [] &&
      realeasey !== "" &&
      censorship !== "" &&
      quality !== "" &&
      tags !== "" &&
      status !== "" &&
      visibility !== "" &&
      files !== []
    ) {
      setShowButton(true);
    }
  }

  function handleRemoveBadge(key) {
    const newTags = Array.from(tags);
    newTags.splice(key, 1);
    setTags(newTags);
  }

  function handleRemoveBadgeStudio(key) {
    console.log(key);
    const newTags = Array.from(studios);
    newTags.splice(key, 1);
    setStudios(newTags);
  }
  async function handleSend() {
    if (!id) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    let data = {
      title,
      original_title,
      studios,
      realeasey,
      censorship,
      quality,
      tags,
      synopsis,
      status,
      visibility,
      files,
    };
    setTitle("");
    setOriginal_title("");
    setStudios([]);
    setStudiosTemp("");
    setRealeasey("");
    setCensorship("");
    setQuality("");
    setVisibility("");
    setTags([]);
    setTagsTemp("");
    setStatus("");
    setSynopsis("");
    setAdm("");
    setFiles([]);

      const response = await api.post("api/admin/hentais", data);
  }

  function handleStudios(event) {
    if (event.key === "Enter") {
      let newTags = studiosTemp.replace(/\s/g, "").split(",");
      setStudiosTemp("");
      setPlacholderStudio("Ex: PoRO");

      let newArray = [];
      newTags.map((tag) => {
        if (!studios.includes(tag)) newArray.push(tag);
      });

      newArray = [...newArray, ...studios];
      newArray = sort(newArray);

      let verifiedArray = [];
      let noValid = "Estúdios inválidos: ";
      newArray.map((tag) => {
        if (studioDB.includes(tag)) {
          verifiedArray.push(tag);
        } else {
          noValid = noValid.concat(
            noValid === "Estúdios inválidos: " ? `${tag}` : `,${tag}`
          );
        }
      });

      setPlacholderStudio((prev) =>
        noValid !== "Estúdios inválidos: " ? noValid : prev
      );

      setStudios(verifiedArray);
    }
  }

  function handleSetStudios(value) {
    if (value !== "Selecionar") {
      setPlacholderStudio("Ex: PoRO");
      const newTags = [...Array.from(studios), value];
      const filteredTags = filter(newTags);
      const sortedTags = sort(filteredTags);
      setStudios(sortedTags);
    }
  }
  function handleTags(event) {
    if (event.key === "Enter") {
      let newTags = tagsTemp.replace(/\s/g, "").split(",");
      setTagsTemp("");
      setPlacholderGender("Ex: Colegial, Escolar, Peitões");

      let newArray = [];
      newTags.map((tag) => {
        if (!tags.includes(tag)) newArray.push(tag);
      });

      console.log(!tags.includes("Ahegao"));
      newArray = [...newArray, ...tags];
      newArray = sort(newArray);

      let verifiedArray = [];
      let noValid = "Taxonomias inválidas: ";
      newArray.map((tag) => {
        if (genders.includes(tag)) {
          verifiedArray.push(tag);
        } else {
          noValid = noValid.concat(
            noValid === "Taxonomias inválidas: " ? `${tag}` : `,${tag}`
          );
        }
      });

      setPlacholderGender((prev) =>
        noValid !== "Taxonomias inválidas: " ? noValid : prev
      );

      setTags(verifiedArray);
    }
  }

  function handleSetTags(value) {
    if (value !== "Selecionar") {
      setPlacholderGender("Ex: Colegial, Escolar, Peitões");
      const newTags = [...Array.from(tags), value];
      const filteredTags = filter(newTags);
      const sortedTags = sort(filteredTags);
      setTags(sortedTags);
    }
  }

  function filter(tags) {
    let newTags = new Set(tags);
    return [...newTags];
  }

  function sort(tags) {
    const newTags = Array.from(tags);
    newTags.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    return newTags;
  }

  React.useEffect(() => {
    tags_arr.map((tag) => setGenders((prev) => [...prev, tag.name]));
    studio_arr.map((tag) => setStudioDB((prev) => [...prev, tag.name]));
  }, []);

  return (
    <section
      className="page-container register-hentais"
      onClick={verify}
      onMouseMove={verify}
    >
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
              label="Estúdios"
              placeholder={placholderStudio}
              value={studiosTemp}
              onChange={setStudiosTemp}
              onKeyPress={handleStudios}
            />
            <ComboBox.ComboSelect
              htmlFor="studios"
              value={studios}
              onChange={handleSetStudios}
              multiple={true}
            >
              {studioDB.map((tag, key) => (
                <ComboBox.ComboItem
                  key={key}
                  value={tag}
                  text={tag}
                ></ComboBox.ComboItem>
              ))}
            </ComboBox.ComboSelect>
          </article>

          <article className="badge-group">
            {studios.map((tag, index) => (
              <Badge
                text={tag}
                key={index}
                index={index}
                onClick={handleRemoveBadgeStudio}
              />
            ))}
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
                value="0"
                name="censorship"
                text="Com Censura"
              />
              <Radio.RadioInput
                value="1"
                name="censorship"
                text="Sem Censura"
              />
            </Radio.RadioForm>

            <Radio.RadioForm
              text="Qualidade"
              value={quality}
              onChange={setQuality}
            >
              <Radio.RadioInput value="1080P" name="quality" text="1080p" />
              <Radio.RadioInput value="720P" name="quality" text="720p" />
            </Radio.RadioForm>
          </div>

          <article className="input-n-select">
            <MainInput
              type="search"
              label="Gêneros"
              placeholder={placholderGender}
              value={tagsTemp}
              onChange={setTagsTemp}
              onKeyPress={handleTags}
            />
            <ComboBox.ComboSelect
              htmlFor="tags"
              value={tags}
              onChange={handleSetTags}
              multiple={true}
            >
              {genders.map((tag, key) => (
                <ComboBox.ComboItem
                  key={key}
                  value={tag}
                  text={tag}
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
              value="Lançamento"
              name="hentai_status"
              text="Lançamento"
            />
            <Radio.RadioInput
              value="Completo"
              name="hentai_status"
              text="Completo"
            />
          </Radio.RadioForm>
          <Radio.RadioForm
            text="Visibilidade"
            value={visibility}
            onChange={setVisibility}
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
            files={files}
            setFiles={setFiles}
          />
          <Button
            className="button-dragndrop"
            to={"RegisterEpisodes/" + title}
            text="Cadastrar Episódios"
          />
        </article>
      </article>

      {showButton ? (
        <button
          className="register-button"
          onClick={id ? () => setOpen(true) : handleSend}
        >
          Cadastrar
        </button>
      ) : null}

      <FavoriteBanner />

      {id ? (
        <ModalAlert open={open} setOpen={setOpen} onClick={handleSend} />
      ) : (
        <ModalSucess open={open} setOpen={setOpen} />
      )}
    </section>
  );
}

export default RegisterHentais;
