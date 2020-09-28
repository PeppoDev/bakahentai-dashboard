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

function Home() {
  return (
    <section className="page-container home">
      <Header />

      <article className="second-container">
        <LastRegisters />
        <LastFeedBacks />
        <Map />
      </article>
      <hr />
      <article className="third-container-title">
        <h2>Hentai Cadastrado</h2>
        <h2>Hentai Cadastrado</h2>
        <h2>Hentai Cadastrado</h2>
      </article>

      <article className="third-container">
        <RegistredHentai />
        <RegistredEpisodes />
        <RegistredComments />
      </article>
    </section>
  );
}

export default Home;
