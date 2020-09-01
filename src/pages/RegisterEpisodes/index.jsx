import React from "react";
//components
import TitlePage from "../../components/TitlePage";
import EpisodeItem from "../../components/EpisodeItem";
import plusIcon from "../../assets/icons/plus.svg";
//css
import "./styles.scss";

function RegisterEpisodes() {
  const initial_state = [
    {
      episode: 1,
      hentai_title: "",
      episode_number: "",
      m3u8: "",
      file: "",
      visibility: "",
    },
  ];
  const base_episode = [
    {
      episode: 1,
      hentai_title: "",
      episode_number: "",
      m3u8: "",
      file: "",
      visibility: "",
    },
  ];

  const [episodes, setEpisodes] = React.useState(initial_state);

  function handleAddEpisodeItem() {
    const newEpisode = Array.from(base_episode);
    newEpisode[0].episode = episodes.length + 1;
    setEpisodes((prev) => [...prev, newEpisode[0]]);
    console.log(episodes);
  }

  return (
    <section className="page-container register-episodes">
      <TitlePage text="Cadastrar de Episódios" />
      {episodes.map((data, index) => (
        <EpisodeItem
          key={data.episode}
          id={data.episode}
          index={index}
          onChange={setEpisodes}
        />
      ))}

      <section>
        <div
          className="add-episode-item"
          onClick={() => handleAddEpisodeItem()}
        >
          <img src={plusIcon} alt="" />
          <p>Adicionar Episódio</p>
        </div>
      </section>
    </section>
  );
}

export default RegisterEpisodes;
