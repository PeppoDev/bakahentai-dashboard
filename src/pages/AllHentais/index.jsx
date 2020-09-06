import React from "react";
//services
import api from "../../services/api/axios";
//components
import TitlePage from "../../components/TitlePage";
//css
import "./styles.scss";
import HentaItem from "../../components/HentaItem";

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
      <TitlePage text="Listar Hentais" />
      <section className="hentai-list">
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
      </section>
    </section>
  );
}

export default AllHentais;
