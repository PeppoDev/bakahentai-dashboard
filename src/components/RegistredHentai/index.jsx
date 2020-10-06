import React from "react";
//components
import HentaiItem from "../HentaItem";

//css
import "./styles.scss";

export default function RegisteredHentai() {
  return (
    <article className="registred-hentai">
      <HentaiItem name={"Algum nome"} studios={[{ name: "algum studio" }]} />
    </article>
  );
}
