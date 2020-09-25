import React from "react";
//css
import "./styles.scss";
//components
import Header from "../../components/Header";
import LastRegisters from "../../components/LastRegisters";
import LastFeedBacks from "../../components/LastFeedbacks";

function Home() {
  return (
    <section className="page-container home">
      <Header />

      <article className="second-container">
        <LastRegisters />
        <LastFeedBacks />
      </article>
    </section>
  );
}

export default Home;
