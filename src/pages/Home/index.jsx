import React from "react";
//css
import "./styles.scss";
//components
import Header from "../../components/Header";
import LastRegisters from "../../components/LastRegisters";
import LastFeedBacks from "../../components/LastFeedbacks";
import Map from "../../components/Map";
import RegistredHentai from "../../components/RegistredHentai";
import RegistredEpisodes from "../../components/RegistredEpisodes";
import RegistredComments from "../../components/RegistredComments";

import LastRegistersHentai from "../../components/LastRegistersHentai";
import LastRegistersEpisode from "../../components/LastRegistersEpisode";
//react-redux
import { useSelector } from "react-redux";

function Home() {
  const page = useSelector((state) => state.page);

  return (
    <section className="page-container home">
      <Header />

      <article className="second-container">
        <LastRegisters>
          {page === "hentais" ? <LastRegistersHentai /> : null}
          {page === "episodes" ? <LastRegistersEpisode /> : null}
        </LastRegisters>
        <LastFeedBacks />
        <Map />
      </article>
      <hr />
      <article className="third-container-title">
        <h2 className="title-component">Hentais Cadastrados</h2>
        <h2 className="title-component">Episódios Cadastrados</h2>
        <h2 className="title-component">Comentários</h2>
      </article>

      <article className="third-container">
        <h2 className="title-component opacity">Hentai Cadastrado</h2>
        <RegistredHentai />
        <h2 className="title-component opacity">Episódios Cadastrados</h2>
        <RegistredEpisodes />
        <h2 className="title-component opacity">Comentários</h2>
        <RegistredComments />
      </article>
    </section>
  );
}

export default Home;
