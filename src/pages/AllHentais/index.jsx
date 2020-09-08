import React from "react";
//services
import api from "../../services/api/axios";
//components
import TitlePage from "../../components/TitlePage";
import HentaItem from "../../components/HentaItem";
import SearchInput from "../../components/SearchInput";
//css
import "./styles.scss";

function AllHentais() {
  const [hentais, setHentais] = React.useState([]);

  React.useEffect(() => {
    async function getHentais() {
      const response = await api.get("/api/adimn/hentais");
      setHentais(response.data);
    }
    getHentais();
  }, []);
  return (
    <section className="page-container all-hentais">
      <TitlePage text="Listar Hentais">
        <SearchInput />
      </TitlePage>
      <article className="hentai-list">
        {/* {hentais.map((index, data) => (
          <HentaItem />
        ))} */}
        <HentaItem />
        <HentaItem />
        <HentaItem />
        <HentaItem />
        <HentaItem />
        <HentaItem />
        <HentaItem />
        <HentaItem />
        <HentaItem />
        <HentaItem />
        <HentaItem />
        <HentaItem />
      </article>
    </section>
  );
}

export default AllHentais;
