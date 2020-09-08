import React from "react";
//components
import TitlePage from "../../components/TitlePage";
import SearchInput from "../../components/SearchInput";
//css
import "./styles.scss";
import EpisodeItemList from "../../components/EpisodeItemList";

function AllEpisodes() {
  return (
    <section className="page-container all-episodes">
      <TitlePage text="Listar Episódios">
        <SearchInput />
      </TitlePage>
      <article className="episode-list">
        <EpisodeItemList />
        <EpisodeItemList />
        <EpisodeItemList />
        <EpisodeItemList />
        <EpisodeItemList />
        <EpisodeItemList />
        <EpisodeItemList />
        <EpisodeItemList />
        <EpisodeItemList />
        <EpisodeItemList />
      </article>
    </section>
  );
}

export default AllEpisodes;
