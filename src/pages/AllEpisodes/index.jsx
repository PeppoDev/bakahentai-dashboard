import React from "react";
//components
import TitlePage from "../../components/TitlePage";
import SearchInput from "../../components/SearchInput";
import * as ComboBox from "../../components/ComboBox";
//css
import "./styles.scss";
import EpisodeItemList from "../../components/EpisodeItemList";

function AllEpisodes() {
  const [query, setQuery] = React.useState("");
  const [order, setOrder] = React.useState("Alfabética");

  return (
    <section className="page-container all-episodes">
      <TitlePage text="TODOS OS EPISÓDIOS">
        <SearchInput onChange={setQuery} value={query} />
        <ComboBox.ComboSelect onChange={setOrder} defaultValue="Alfabética">
          <ComboBox.ComboItem value="Postagem" text="Postagem" />
          <ComboBox.ComboItem value="Lançamento" text="Lançamento" />
        </ComboBox.ComboSelect>
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
